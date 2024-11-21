import React from 'react';
import './App.css';
import SearchComponent from './SearchComponent';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Welcome to FlightFinder</h1>
        <p className="subtitle">Search for your home airport and select a maxiumum flight time</p>
        <SearchComponent />
      </div>
    </div>
  );
}

export default App;
