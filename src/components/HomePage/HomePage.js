import React, { useState } from "react";
import "./HomePage.css";
import video from "../../Assets/video.mp4";
import { findAirports } from "../FlightData"; // Importer le composant FlightData

const HomePage = () => {
  const [locationCode, setLocationCode] = useState("");
  const [maxDistance, setMaxDistance] = useState("");
  const [maxDuration, setMaxDuration] = useState("");
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]); // Nouvel état pour les suggestions

  const airports = [
    "YYC", "YYG", "YEG", "YFC", "YHZ", "YFB", "YQM", "YUL", "YQB", "YYT", "YQT", 
    "YTZ", "YYZ", "YVR", "YWG", "YZF", "BOS", "ORD", "FLL", "RSW", "LAS", "EWR", "MCO", 
    "TPA", "DCA", "IAD"
  ]; // Liste des codes d'aéroports pour la suggestion

  // Fonction pour filtrer les suggestions en fonction de l'entrée utilisateur
  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setLocationCode(userInput);

    if (userInput) {
      // Filtrer les suggestions en fonction du code d'aéroport
      const filteredSuggestions = airports.filter(code =>
        code.toUpperCase().includes(userInput.toUpperCase())
      );
      setSuggestions(filteredSuggestions); // Mettre à jour les suggestions
    } else {
      setSuggestions([]); // Effacer les suggestions quand l'input est vide
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filters = {
      locationCode: locationCode.trim() || null,
      maxDistance: maxDistance ? parseInt(maxDistance, 10) : null,
      maxDuration: maxDuration ? parseInt(maxDuration, 10) : null,
    };
    console.log("Filters before search:", filters);

    const matchingAirports = findAirports(filters);
    setResults(matchingAirports);
  };

  return (
    <section className="Homepage">
      <div className="overlay"></div>
      <video
        className="background-video"
        src={video}
        muted
        autoPlay
        loop
        type="video/mp4"
      />
      <div className="homeContent container">
        <div className="textDiv"></div>
      </div>

      <div className="homeContent container">
  <div className="textDiv">
    <h1 className="christmas-title">Christmas Packages</h1> {/* Texte ajouté */}
  </div>
</div>

      <div className="car-div">
        <h1>Search for Airports</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>
              Location Code:
              <input
                type="text"
                value={locationCode}
                onChange={handleInputChange} // Mettre à jour avec les suggestions
                placeholder="e.g., YUL"
              />
            </label>
            {suggestions.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.map((suggestion, index) => (
                  <li key={index} onClick={() => setLocationCode(suggestion)}>
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="input-group">
            <label>
              Max Distance (km):
              <input
                type="number"
                value={maxDistance}
                onChange={(e) => setMaxDistance(e.target.value)}
                placeholder="e.g., 1000"
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Max Flight Duration (minutes):
              <input
                type="number"
                value={maxDuration}
                onChange={(e) => setMaxDuration(e.target.value)}
                placeholder="e.g., 120"
              />
            </label>
          </div>
          <button type="submit">Search</button>
        </form>
        <h2>Results:</h2>
        <ul>
          {results.length > 0 ? (
            results.map((airport, index) => (
              <li key={index}>
                {airport.city} ({airport.code}) - Distance: {airport.distance}{" "}
                km, Duration: {airport.duration} minutes
              </li>
            ))
          ) : (
            <p>No airports found matching the criteria.</p>
          )}
        </ul>
      </div>
    </section>
  );
};

export default HomePage;
