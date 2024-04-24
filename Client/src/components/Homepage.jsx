import React from 'react';
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">LAUNDRY BIN</h1>
      <button className="home-button" onClick={() => { window.location.href = '/login'; }}>Login</button>
      <br />
      <button className="home-button" onClick={() => { window.location.href = '/register'; }}>Register</button>
    </div>
  );
};

export default HomePage;
