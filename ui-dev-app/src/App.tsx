import React from 'react';
import './App.css';
import MainPage from "./Components/MainPage/MainPage";
import PatientsPanel from "./Components/PatientsPanel/PatientsPanel";

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <MainPage></MainPage>
                <PatientsPanel></PatientsPanel>
            </header>
        </div>
    );
};

export default App;
