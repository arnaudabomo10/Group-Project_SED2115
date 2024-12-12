// Nick
import React, { useState } from 'react';
import './Header.css'; 
import logo from '../../Assets/image.jpg'; 
import navbarIcon from '../../Assets/icon.png'; 

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Fonction pour gérer l'affichage du menu
  const toggleMenu = () => {
    console.log("Before:", showMenu);
    setShowMenu(!showMenu);
    console.log("After:", !showMenu);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-icon" onClick={toggleMenu}>
          
        <img src={navbarIcon} alt="Navbar Icon" />
      </div>
      <div className={`menu ${showMenu ? 'show' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/destinations">Default Destinations</a>
      </div>
    </header>
  );
};

export default Header;
