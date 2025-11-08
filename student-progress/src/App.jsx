import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // Add this import
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import AddStudentForm from './components/AddStudentForm';
import StudentList from './components/StudentList';

const STORAGE_KEY = "student_progress_tracker_v1";

function App() {
  const [students, setStudents] = useState([]);

  //load students from localstorage on component mount
  useEffect(() => {
    const savedStudents = localStorage.getItem(STORAGE_KEY);
    if (savedStudents) {
      try {
        setStudents(JSON.parse(savedStudents));
      } catch(error) {
        console.error("Error loading students: ", error);
        setStudents([]);
      }
    }
  }, []);

  // save students to localstorage whenever students state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  const addStudent = (newStudent) => {
    setStudents(prev => [newStudent, ...prev]);
  };

  const deleteStudent = (studentId) => {
    setStudents(prev => prev.filter(student => student.id !== studentId));
  };

  const updateStudentProgress = (studentId, newProgress) => {
    setStudents(prev => prev.map(student =>
      student.id === studentId
        ? {
            ...student,
            progress: Math.min(newProgress, 100),
            lastUpdated: new Date().toLocaleDateString()
          }
        : student
    ));
  };

  // Calculate dashboard statistics
  const totalStudents = students.length;
  const averageProgress = totalStudents > 0
    ? students.reduce((sum, student) => sum + student.progress, 0) / totalStudents
    : 0;

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="dashboard">
                <div className="dashboard-header">
                  <h2>📈 Progress Dashboard</h2>
                  <div className="dashboard-stats">
                    <div className="stat">
                      <div className="stat-value">{totalStudents}</div>
                      <div className="stat-label">Total Students</div>
                    </div>
                    <div className="stat">
                      <div className="stat-value">{averageProgress.toFixed(1)}%</div>
                      <div className="stat-label">Average Progress</div>
                    </div>
                  </div>
                </div>
                <StudentList 
                  students={students} 
                  onDeleteStudent={deleteStudent}
                  onUpdateProgress={updateStudentProgress}
                />
              </div>
            } 
          />
          <Route 
            path="/add" 
            element={<AddStudentForm onAddStudent={addStudent} />} 
          />
          <Route 
            path="/students" 
            element={
              <StudentList 
                students={students} 
                onDeleteStudent={deleteStudent}
                onUpdateProgress={updateStudentProgress}
              />
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
