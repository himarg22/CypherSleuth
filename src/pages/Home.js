
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to CypherSleuth</h1>
        <p>Your trusted cybersecurity platform for detecting and preventing online threats.</p>
      </main>
    </div>
  );
}

export default Home;
