// Nick
import React, { useState } from 'react'; // Importing React and the useState hook for managing component state
import './Header.css'; // Importing the CSS file for styling the Header component
import logo from '../../Assets/image.jpg'; // Importing the logo image
import navbarIcon from '../../Assets/icon.png'; // Importing the navbar icon image

const Header = () => { //Arrow function that is assigned to a constant variable Header
  const [showMenu, setShowMenu] = useState(false); // Defining a state variable to track whether the menu is visible

  // Function to toggle the menu visibility (making the menu visible)
  const toggleMenu = () => {
    console.log("Before:", showMenu); // Logging the current menu visibility state before toggling
    setShowMenu(!showMenu); // Updating the state to show or hide the menu
    console.log("After:", !showMenu); // Logging the updated state after toggling
  };

  return (
    <header className="header"> {/* Main header container */}
      <div className="logo"> {/* Container for the logo */}
        <img src={logo} alt="Logo" /> {/* Displaying the logo image */}
      </div>
      <div className="navbar-icon" onClick={toggleMenu}> {/* Navbar icon, which toggles the menu on click */}
        <img src={navbarIcon} alt="Navbar Icon" /> {/* Displaying the navbar icon image */}
      </div>
      <div className={`menu ${showMenu ? 'show' : ''}`}> {/* Menu container, which conditionally applies the 'show' class */}
        <a href="/">Home</a> {/* Link to the Home page. href means Hypertext Reference */}
        <a href="/about">About</a> {/* Link to the About page */}
        <a href="/destinations">Default Destinations</a> {/* Link to the Default Destinations page */}
      </div>
    </header>
  );
};

export default Header; // Exporting the Header component for use in other parts of the application
