  // src/pages/UrlClassification.js
  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import './UrlClassification.css';

  function UrlClassification() {
    const [url, setUrl] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:5000/api/classify-url', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url }),
          });
          const result = await response.json();
          alert(`The URL is classified as: ${result.classification}`);
          navigate('/dashboard', { state: { classification: result.classification, url } });
        } catch (error) {
          console.error('Error classifying URL:', error);
        }
      };

    return (
      <div>
        <h2>Enter a URL to classify</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            required
          />
          <button type="submit">Classify URL</button>
        </form>
      </div>
    );
  }

  export default UrlClassification;
