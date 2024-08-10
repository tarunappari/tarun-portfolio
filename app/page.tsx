"use client"; // Add this directive to mark the component as a Client Component

import React, { useState, useEffect } from 'react';
import { Navbar } from './Components/Mainsections/Navbar/Navbar';
import Hero from './Components/Mainsections/Hero/Hero';
import { navItems } from '../public/data';
import Projects from './Components/Mainsections/Projects/Projects';
import { GlobalStyles } from './GlobalStyles';
import Experience from './Components/Mainsections/Experience/Experience';
import Contact from './Components/Mainsections/Contact/Contact';
import Tech from './Components/Mainsections/Tech/Tech';
import StarsCanvas from './Components/Stars';

export default function Home() {
  const [showStarsCanvas, setShowStarsCanvas] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStarsCanvas(true);
    }, 8000); // 5000 milliseconds = 8 seconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <main>
      <GlobalStyles />
      <Navbar navItems={navItems} className="nav" />
      <div className="relative z-0">
        <Hero idName="#hero" />
        <Experience idName="" />
        <Projects idName="#projects" />
        <Tech idName="tech" />
        <Contact idName="#contact" />
        {showStarsCanvas && <StarsCanvas />} {/* Conditionally render StarsCanvas */}
      </div>
    </main>
  );
}
