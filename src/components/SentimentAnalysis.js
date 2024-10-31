import React, { useState } from 'react';
import Sentiment from 'sentiment';
import './SentimentAnalysis.css';

function SentimentAnalysis() {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState('');
  const [loading, setLoading] = useState(false);
  const sentimentAnalyzer = new Sentiment();

  const analyzeSentiment = () => {
    if (!text) return;
    setLoading(true);
    const result = sentimentAnalyzer.analyze(text);
    setSentiment(result.score > 0 ? 'positive' : result.score < 0 ? 'negative' : 'neutral');
    setLoading(false);
  };

  // Function to clear the text and sentiment
  const clearText = () => {
    setText('');
    setSentiment('');
  };

  return (
    <div className="sentiment-analysis">
      <p>Enter some text and analyze it for sentiment.</p>
      <textarea
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={analyzeSentiment} disabled={loading}>
        {loading ? 'Analyzing...' : 'Analyze Sentiment'}
      </button>
      <button onClick={clearText} disabled={loading}>
        Clear
      </button>
      {sentiment && (
        <div className={`result ${sentiment}`}>
          <p>Sentiment: {sentiment}</p>
        </div>
      )}
    </div>
  );
}

export default SentimentAnalysis;
