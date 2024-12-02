import React, { useState } from 'react';
import './Header.css'; // Assurez-vous que ce fichier CSS est dans le même répertoire
import logo from '../../Assets/image.jpg'; // Chemin relatif vers l'image
import navbarIcon from '../../Assets/icon.png'; // Chemin relatif vers votre icône navbar

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Fonction pour gérer l'affichage du menu
  const toggleMenu = () => {
    console.log("Avant :", showMenu);
    setShowMenu(!showMenu);
    console.log("Après :", !showMenu);
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
      </div>
    </header>
  );
};

export default Header;
