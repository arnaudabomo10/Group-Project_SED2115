import React, { useState } from 'react';

function SearchComponent() {
  const [searchInput, setSearchInput] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const dropdownOptions = ['1 Hour', '2 Hours', '3 Hours', '4 Hours', '5 hours', '6 Hours', '7 Hours', '8 Hours', '9 Hours', '10 Hours'];

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <select
        value={selectedOption}
        onChange={handleDropdownChange}
        className="dropdown"
      >
        <option value="">Select an option</option>
        {dropdownOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="results">
        {searchInput && <p>You searched for: <strong>{searchInput}</strong></p>}
        {selectedOption && <p>You selected: <strong>{selectedOption}</strong></p>}
      </div>
    </div>
  );
}

export default SearchComponent;
