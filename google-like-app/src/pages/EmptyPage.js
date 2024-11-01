// src/pages/EmptyPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmptyPage.css'; // Optional: Your styles for the empty page

const EmptyPage = () => {
    const navigate = useNavigate(); // Hook to navigate

    return (
        <div>
            <h1>Choose a Topic</h1>
            <div className="icon-container">
                <div className="icon" onClick={() => navigate('/empty-page/covid')}>
                    <h2>COVID</h2>
                    {/* You can replace the following with your icon */}
                    <img src="path_to_covid_icon.png" alt="COVID Icon" />
                </div>
                <div className="icon" onClick={() => navigate('/empty-page/plankton')}>
                    <h2>Plankton</h2>
                    {/* Replace with your plankton icon */}
                    <img src="path_to_plankton_icon.png" alt="Plankton Icon" />
                </div>
                <div className="icon" onClick={() => navigate('/empty-page/iss')}>
                    <h2>ISS</h2>
                    {/* Replace with your ISS icon */}
                    <img src="path_to_iss_icon.png" alt="ISS Icon" />
                </div>
            </div>
        </div>
    );
};

export default EmptyPage;
