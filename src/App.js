import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DashboardPage from './pages/DashboardPage';
import BreachReportingPage from './pages/BreachReportingPage';
import SecurityAuditsPage from './pages/SecurityAuditsPage';
import SpamDetection from './components/SpamDetection';
import PhishingDetection from './components/PhishingDetection';
import Recommendations from './components/Recommendations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/breach-report" element={<BreachReportingPage />} />
        <Route path="/security-audits" element={<SecurityAuditsPage />} />
        <Route path="/spam-detection" element={<SpamDetection />} />
        <Route path="/phishing-detection" element={<PhishingDetection />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </Router>
  );
}

export default App;
