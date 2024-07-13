import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "./Components/MainPage/MainPage";
import PatientPage from "./Components/PatientPage/PatientPage";
import './App.css';
import Navbar from "./Components/NavBar/NavBar";

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/patient/:id" element={<PatientPage />} />
            </Routes>
        </Router>
    );
};

export default App;
