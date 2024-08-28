import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "./Components/MainPage/MainPage";
import PatientPage from "./Components/PatientPage/PatientPage";
import './App.css';
import Navbar from "./Components/NavBar/NavBar";
import TrackingPage from "./Components/TrackingPage/TrackingPage";

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/patient" element={<PatientPage />} />
                <Route path="/tracking" element={<TrackingPage />} />
                <Route path="/patient/:id" element={<PatientPage />} />
            </Routes>
        </Router>
    );
};

export default App;
