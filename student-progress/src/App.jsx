import React, { useState, useEffect } from 'react'
import {Routes, Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

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
        // Initialize with empty array if there's an error
        setStudents([]);
      }
    }
  }, []);
}

export default App
