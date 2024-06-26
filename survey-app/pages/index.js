// pages/index.js
import React, { useState } from 'react';

const SurveyForm = () => {
    const [hoursStudy, setHoursStudy] = useState('');
    const [studyMethod, setStudyMethod] = useState('');
    const [averageGrade, setAverageGrade] = useState('');
    const [ageGroup, setAgeGroup] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Create formData object
        const formData = {
            hoursStudy,
            studyMethod,
            averageGrade,
            ageGroup
        };
        console.log(formData); // Output formData object to console

        // Example: Send formData to MongoDB or perform other operations
        try {
            // Replace this with your MongoDB API call or any other logic
            const response = await fetch('/api/survey', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Form data submitted successfully!');
                // Optionally, you can reset form fields here:
                setHoursStudy('');
                setStudyMethod('');
                setAverageGrade('');
                setAgeGroup('');
            } else {
                console.error('Failed to submit form data');
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', background: '#d2b48c', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#523b24', fontFamily: 'Georgia, serif' }}>Survey on Academic Performance and Study Habits</h2>

            {/* Your form fields here */}
            {/* Example: Hours of study */}
            <div style={{ background: '#ffffff', padding: '20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label style={{ flex: '1', marginBottom: '10px', color: '#523b24', fontFamily: 'Georgia, serif' }}>
                    How many hours do you study each day?
                </label>
                <select value={hoursStudy} onChange={(e) => setHoursStudy(e.target.value)} required style={{ flex: '2', marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #523b24', fontFamily: 'Arial, sans-serif' }}>
                    <option value="">Select...</option>
                    <option value="1-2 hours">1-2 hours</option>
                    <option value="2-4 hours">2-4 hours</option>
                    <option value="4-5 hours">4-5 hours</option>
                    <option value="6-7 hours">6-7 hours</option>
                    <option value="7+ hours">7+ hours</option>
                </select>
            </div>

            {/* Example: Study method */}
            <div style={{ background: '#ffffff', padding: '20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label style={{ flex: '1', marginBottom: '10px', color: '#523b24', fontFamily: 'Georgia, serif' }}>
                    What study method do you use?
                </label>
                <select value={studyMethod} onChange={(e) => setStudyMethod(e.target.value)} required style={{ flex: '2', marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #523b24', fontFamily: 'Arial, sans-serif' }}>
                    <option value="">Select...</option>
                    <option value="Method 1">Flashcards</option>
                    <option value="Method 2">Group Study</option>
                    <option value="Method 3">Active Reading</option>
                    <option value="Method 4">Practice Testing</option>
                    <option value="Method 5">Other</option>
                </select>
            </div>

            {/* Example: Average grades */}
            <div style={{ background: '#ffffff', padding: '20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label style={{ flex: '1', marginBottom: '10px', color: '#523b24', fontFamily: 'Georgia, serif' }}>
                    What are your average grades in major subjects?
                </label>
                <select value={averageGrade} onChange={(e) => setAverageGrade(e.target.value)} required style={{ flex: '2', marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #523b24', fontFamily: 'Arial, sans-serif' }}>
                    <option value="">Select...</option>
                    <option value="1.0">1.0</option>
                    <option value="1.25">1.25</option>
                    <option value="1.5">1.5</option>
                    <option value="1.75">1.75</option>
                    <option value="2.0">2.0</option>
                    <option value="2.25">2.25</option>
                    <option value="2.5">2.5</option>
                    <option value="2.75">2.75</option>
                    <option value="3.0">3.0</option>
                    <option value="3.25">3.25</option>
                    <option value="3.5">3.5</option>
                    <option value="3.75">3.75</option>
                    <option value="4.0">4.0</option>
                    <option value="4.25">4.25</option>
                    <option value="4.5">4.5</option>
                    <option value="4.75">4.75</option>
                    <option value="5.0">5.0</option>
                </select>
            </div>

            {/* Example: Age group */}
            <div style={{ background: '#ffffff', padding: '20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label style={{ flex: '1', marginBottom: '10px', color: '#523b24', fontFamily: 'Georgia, serif' }}>
                    What is your age group?
                </label>
                <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)} required style={{ flex: '2', marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #523b24', fontFamily: 'Arial, sans-serif' }}>
                    <option value="">Select...</option>
                    <option value="Under 18">Under 18</option>
                    <option value="18-24">18-24</option>
                    <option value="25-34">25-34</option>
                    <option value="35-44">35-44</option>
                    <option value="45-54">45-54</option>
                    <option value="55-64">55-64</option>
                    <option value="65 or above">65 or above</option>
                </select>
            </div>

            <button type="submit" style={{ backgroundColor: '#523b24', color: '#ffffff', padding: '10px 20px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>Submit</button>
        </form>
    );
};

export default SurveyForm;
