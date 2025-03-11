import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/spam-detection'); // Redirect to the input page
  };
//spam-detection
  return (
    <div>
      <Header />
      <main className="home-container">
        <h1>Welcome to CypherSleuth</h1>
        <p className='mm'>Your trusted cybersecurity platform for detecting and preventing online threats.</p>
        <button className="get-started-btn" onClick={() => navigate("/login")}>Get Started</button>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
