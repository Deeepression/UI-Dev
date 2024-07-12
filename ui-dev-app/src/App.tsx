import React, { useState } from 'react';
import './App.css';
import MainPage from "./Components/MainPage/MainPage";

const App: React.FC = () => {
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
      <div className="App">
        <header className="App-header">
          <MainPage></MainPage>
        </header>
      </div>
  );
};

export default App;
