"use client"
import React, { useState } from 'react';
import './Hero.css'; // Importing the CSS file for styling

const Hero = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="hero">
      <div
        className="hero-image"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src="/assets/hero.jpeg"
          alt="Hero"
        />
      </div>
      <div className="hero-content">
        <h1>Discover and Buy Art Online</h1>
        <p>Explore a vast collection of artworks from renowned and emerging artists around the world.</p>
        
      </div>
    </div>
  );
}

export default Hero;
