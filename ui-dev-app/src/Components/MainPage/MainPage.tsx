import React, { useState } from 'react';
import './MainPage.css';

const MainPage: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [prediction, setPrediction] = useState<number | null>(null);

    const handlePredict = async () => {
        const response = await fetch('http://localhost:8080/api/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });

        const data = await response.json();
        setPrediction(data.score);
    };

    return (
        <>
            <h1>Suicide Likelihood Prediction</h1>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text here..."
            />
            <button onClick={handlePredict}>Predict</button>
            {prediction !== null && <p>Prediction Score: {prediction}</p>}
        </>
    );
};

export default MainPage;
