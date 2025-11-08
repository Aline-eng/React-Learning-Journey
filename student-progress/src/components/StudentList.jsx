import React from "react";
import ProgressCard from "./ProgressCard";

function StudentList({ students, onDeleteStudent, onUpdateProgress }) {
    if (!students.length) {
        return (
            <div className="empty-state">
                <div className="empty-icon">👨‍🎓</div>
                <h3>No Students Yet</h3>
                <p>Add your first student to start tracking their progress</p>
            </div>
        );
    }

    // Sort students by progress (highest first)
    const sortedStudents = [...students].sort((a, b) => b.progress - a.progress);

    // Calculate statistics
    const totalStudents = students.length;
    const averageProgress = students.reduce((sum, student) => sum + student.progress, 0) / totalStudents;
    const topPerformer = sortedStudents[0];

    return (
        <div className="student-list-container">
            <div className="stats-overview">
                <div className="stat-card">
                    <h4>Total Students</h4>
                    <div className="stat-number">{totalStudents}</div>
                </div>
                <div className="stat-card">
                    <h4>Average Progress</h4>
                    <div className="stat-number">{averageProgress.toFixed(1)}%</div>
                </div>
                <div className="stat-card">
                    <h4>Top Performer</h4>
                    <div className="stat-number">{topPerformer?.name || "N/A"}</div>
                </div>
            </div>

            <div className="student-grid">
                {sortedStudents.map((student) => (
                    <ProgressCard
                        key={student.id}
                        student={student}
                        onDelete={onDeleteStudent}
                        onUpdate={onUpdateProgress}
                    />
                ))}
            </div>
        </div>
    );
}

export default StudentList