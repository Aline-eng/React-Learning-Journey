import React, { useState } from "react";

function AddStudentForm({ onAddStudent }) {
    const [formData, setFormData] = useState({
        name: "",
        course: "Computer Science",
        progress: 0,
        email: ""
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const courses = [
        "Computer Science",
        "Software Engineering",
        "Data Science",
        "Web Development",
        "Mobile Development",
        "Cybersecurity",
        "Artificial Intelligence"
    ];

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        if (formData.progress < 0 || formData.progress > 100) {
            newErrors.progress = "Progress must be between 0 and 100";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));

        const newStudent = {
            ...formData,
            id: Date.now().toString(),
            lastUpdated: new Date().toLocaleDateString(),
            progress: Number(formData.progress)
        };

        onAddStudent(newStudent);

        // Reset form
        setFormData({
            name: "",
            course: "Computer Science",
            progress: 0,
            email: ""
        });
        setErrors({});
        setIsSubmitting(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    return (
        <div className="form-container">
            <div className="form-header">
                <h2>Add New Student</h2>
                <p>Enter student details to start tracking their progress</p>
            </div>

            <form onSubmit={handleSubmit} className="student-form">
                <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "error" : ""}
                        placeholder="Enter student's full name"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "error" : ""}
                        placeholder="student@example.com"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="course">Course *</label>
                    <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                    >
                        {courses.map(course => (
                            <option key={course} value={course}>{course}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="progress">
                        Current Progress: {formData.progress}%
                    </label>
                    <input
                        type="range"
                        id="progress"
                        name="progress"
                        min="0"
                        max="100"
                        value={formData.progress}
                        onChange={handleChange}
                        className={errors.progress ? "error" : ""}
                    />
                    <div className="range-labels">
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                    </div>
                    {errors.progress && <span className="error-message">{errors.progress}</span>}
                </div>

                <button 
                    type="submit" 
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Adding Student..." : "➕ Add Student"}
                </button>
            </form>
        </div>
    );
}

export default AddStudentForm