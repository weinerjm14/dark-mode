import React, { useState, useEffect } from 'react';
import {useDarkMode} from '../hooks/useDarkMode';

const initalValues= { darkMode: false };

const Navbar = () => {
    
  const toggleMode = e => {
    e.preventDefault();
    value.setDarkMode(!value.darkMode)
  };


  const value = useDarkMode(darkMode, initalValues, toggleMode);
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={value.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
