
// Dashboard.js
import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>
      <div className="card-container">
        <div className="card1">Spam Detection</div>
        <div className="card2">Phishing Detection</div>
        <div className="card3">Recommendations</div>
      </div>
    </div>
  );
}

export default Dashboard;
