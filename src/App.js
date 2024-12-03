// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage'; // Composant pour la page Home
import AboutPage from './components/AboutPage/AboutPage'; // Composant pour la page About


const App = () => {
  return (
    <Router>
      <Header />
      
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<HomePage />} /> 
        {/* Route pour la page "About" */}
        <Route path="/about" element={<AboutPage />} /> 
        {/* Nouvelle route pour la page de données des vols */}
        {/* <Route path="/flights" element={<FlightData />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
