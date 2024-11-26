// src/components/Feedback.jsx
"use client";

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Feedback.css'; // Optional: for custom styles

const Feedback = () => {
    const [feedbackList, setFeedbackList] = useState([]);
    const [feedback, setFeedback] = useState('');
    const [name, setName] = useState('');

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (feedback && name) {
            const newFeedback = {
                id: uuidv4(),
                name: name,
                feedback: feedback,
                date: new Date().toLocaleString(),
            };
            setFeedbackList([newFeedback, ...feedbackList]);
            setFeedback('');
            setName('');
        }
    };

    return (
        <div className="feedback-container">
            <h2>Leave Your Feedback</h2><br></br><br></br>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="feedback">Feedback:</label>
                    <textarea
                        id="feedback"
                        value={feedback}
                        onChange={handleFeedbackChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form><br></br>
            <h3>Feedback List</h3>
            <ul className="feedback-list">
                {feedbackList.map((item) => (
                    <li key={item.id}>
                        <p><strong>{item.name}</strong> ({item.date}):</p>
                        <p>{item.feedback}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Feedback;
