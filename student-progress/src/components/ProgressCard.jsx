import React from "react";

function ProgressCard({ student, onDelete, onUpdate }) {
    const { id, name, course, progress, grade, lastUpdated } = student;

    // Determine progress color based on percentage
    const getProgressColor = (progress) => {
        if (progress >= 90) return "#10b981"; 
        if (progress >= 70) return "#3b82f6"; 
        if (progress >= 50) return "#f59e0b"; 
        return "#ef4444"; 
    };

    // Calculate grade based on progress
    const calculateGrade = (progress) => {
        if (progress >= 90) return "A";
        if (progress >= 80) return "B";
        if (progress >= 70) return "C";
        if (progress >= 60) return "D";
        return "F";
    };

    const progressColor = getProgressColor(progress);
    const currentGrade = grade || calculateGrade(progress);

    return (
        <div className="progress-card">
            <div className="card-header">
                <h3>{name}</h3>
                <span className={`grade grade-${currentGrade}`}>{currentGrade}</span>
            </div>
            
            <div className="course-info">
                <span className="course-badge">{course}</span>
            </div>

            <div className="progress-section">
                <div className="progress-label">
                    <span>Progress</span>
                    <span className="progress-value">{progress}%</span>
                </div>
                <div className="progress-bar">
                    <div 
                        className="progress-fill" 
                        style={{
                            width: `${progress}%`,
                            backgroundColor: progressColor
                        }}
                    ></div>
                </div>
            </div>

            <div className="card-meta">
                <small>Last updated: {lastUpdated || "Never"}</small>
            </div>

            <div className="card-actions">
                <button 
                    className="btn btn-secondary"
                    onClick={() => onUpdate(id, progress + 5)}
                    disabled={progress >= 100}
                >
                    📈 +5% Progress
                </button>
                <button 
                    className="btn btn-danger"
                    onClick={() => onDelete(id)}
                >
                    🗑️ Delete
                </button>
            </div>
        </div>
    );
}

export default ProgressCard