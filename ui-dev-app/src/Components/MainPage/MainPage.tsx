import React, {useState} from 'react';
import PatientsPanel from "../PatientsPanel/PatientsPanel";
import {Button} from "@mui/material";
import {StyledPredictContainer} from "./MainPage.styles";

const MainPage: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [prediction, setPrediction] = useState<number | null>(null);

    const handlePredict = async () => {
        const response = await fetch('http://localhost:8080/api/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text}),
        });

        const data = await response.json();
        setPrediction(data.score);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2>Suicide Likelihood Prediction</h2>
                <StyledPredictContainer
                    fullWidth
                    color='info'
                    label="Patient Post"
                    margin="normal"
                    multiline
                    rows={4}
                    value={text}
                    placeholder="Enter text here..."
                    onChange={(e) => setText(e.target.value)}
                />
                <Button variant='contained' onClick={handlePredict}>Predict </Button>
                    {prediction !== null && <p>Prediction Score: {prediction}</p>}
                    <PatientsPanel></PatientsPanel>
            </header>
        </div>
);
};

export default MainPage;
