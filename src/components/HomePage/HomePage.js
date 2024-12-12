// Nick
import React, { useState } from "react"; // Importing React and the useState hook for managing state
import "./HomePage.css"; // Importing the CSS file for styling the HomePage component
import video from "../../Assets/video.mp4"; // Importing the background video
import { findAirports } from "../FlightData"; // Importing a utility function to find matching airports

const HomePage = () => {
  // State variables to manage user inputs, results, and suggestions
  const [locationCode, setLocationCode] = useState(""); // State for the user's input location code (empty string)
  const [maxDistance, setMaxDistance] = useState(""); // State for the user's input maximum distance (empty string)
  const [maxDuration, setMaxDuration] = useState(""); // State for the user's input maximum flight duration (empty string)
  const [results, setResults] = useState([]); // State for the list of matching airport results (empty array)
  const [suggestions, setSuggestions] = useState([]); // State for the airport code suggestions (empty array)

  // List of predefined airport codes for generating suggestions
  const airports = [
    "YYC", "YYG", "YEG", "YFC", "YHZ", "YFB", "YQM", "YUL", "YQB", "YYT", "YQT",
    "YTZ", "YYZ", "YVR", "YWG", "YZF", "BOS", "ORD", "FLL", "RSW", "LAS", "EWR", "MCO",
    "TPA", "DCA", "IAD"
  ];

  // Function to handle user input changes and update suggestions
  const handleInputChange = (e) => {
    const userInput = e.target.value; // Get the user's input
    setLocationCode(userInput); // Update the location code state

    if (userInput) {
      // Filter the airport list based on user input
      const filteredSuggestions = airports.filter(code =>
        code.toUpperCase().includes(userInput.toUpperCase()) // Convert user input of airport code to upper case
      );
      setSuggestions(filteredSuggestions); // Update the suggestions state
    } else {
      setSuggestions([]); // Clear suggestions if input is empty
    }
  };

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Prepare filter criteria from user inputs
    const filters = {
      locationCode: locationCode.trim() || null, // Trim whitespace and set null if empty
      maxDistance: maxDistance ? parseInt(maxDistance, 10) : null, // Parse distance to an integer or set null
      maxDuration: maxDuration ? parseInt(maxDuration, 10) : null, // Parse duration to an integer or set null
    };
    console.log("Filters before search:", filters); // Log the filters for debugging

    const matchingAirports = findAirports(filters); // Call the utility function to find matching airports
    setResults(matchingAirports); // Update the results state with the matches
  };

  return (
    <section className="Homepage"> {/* Main container for the HomePage */}
      <div className="overlay"></div> {/* Semi-transparent overlay */}
      <video
        className="background-video"
        src={video}
        muted
        autoPlay
        loop
        type="video/mp4"
      /> {/* Background video */}
      <div className="homeContent container">
        <div className="textDiv"></div> {/* Empty text div for future content */}
      </div>

      <div className="homeContent container"> {/* Main content container */}
        <div className="textDiv">
          <h1 className="page-title">Welcome to FlyXchange</h1> {/* Page title */}
        </div>
      </div>

      <div className="car-div">
        <h1>Search for possible destinations</h1> {/* Search form heading */}
        <form onSubmit={handleSubmit}> {/* Form for user input */}
          <div className="input-group">
            <label>
              Location Code:
              <input
                type="text"
                value={locationCode}
                onChange={handleInputChange} // Handle user input changes for location code
                placeholder="e.g., YUL"
              />
            </label>
            {suggestions.length > 0 && ( // Render suggestions if available
              <ul className="suggestions-list">
                {suggestions.map((suggestion, index) => (
                  <li key={index} onClick={() => setLocationCode(suggestion)}> {/* Update location code on click */}
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
                onChange={(e) => setMaxDistance(e.target.value)} // Update max distance state
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
                onChange={(e) => setMaxDuration(e.target.value)} // Update max duration state
                placeholder="e.g., 120"
              />
            </label>
          </div>
          <button type="submit">Search</button> {/* Submit button */}
        </form>
        <h2>Results:</h2> {/* Results section */}
        <ul>
          {results.length > 0 ? ( // Check if results are available
            results.map((airport, index) => (
              <li key={index}>
                {airport.city} ({airport.code}) - Distance: {airport.distance}{" "}
                km, Duration: {airport.duration} minutes
              </li> // Display each matching airport's details
            ))
          ) : (
            <p>No destinations found matching the criteria.</p> // Message if no matches found
          )}
        </ul>
      </div>
    </section>
  );
};

export default HomePage; // Export the HomePage component for use in the application
