import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage'
import PatientPage from './Components/PatientPage/PatientPage'
import './App.css'
import Navbar from './Components/NavBar/NavBar'
import TrackingPage from './Components/TrackingPage/TrackingPage'
import Dashboard from './Components/Dashboard/Dashboard'
import SettingScreen from './Components/SettingScreen/SettingScreen'
import AboutUsPage from './Components/AboutUsPage/AboutUsPage'

const App: React.FC = () => {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #bdbdbd1c 0%, #9684843d 100%)',
        minHeight: '100vh'
      }}>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/patient" element={<PatientPage />} />
                <Route path="/tracking" element={<TrackingPage />} />
                <Route path="/patient/:id" element={<PatientPage />} />
                <Route path="/dashboard" element={<Dashboard /> } />
                <Route path="/settings" element={<SettingScreen /> } />
                <Route path="/aboutus" element={<AboutUsPage />} />
            </Routes>
        </Router>
      </div>
    );
};

export default App;
