import React from 'react';
import './App.css';
import SentimentAnalysis from './components/SentimentAnalysis';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sentilytics</h1>
        <h2>A Sentiment analysis Web Application</h2>
        <SentimentAnalysis />
      </header>
    </div>
  );
}

export default App;
