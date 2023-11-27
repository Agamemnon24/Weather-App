// WeatherSearch.js
import React, { useState } from "react";

const WeatherSearch = ({
  weatherData,
  searchedCity,
  onSearchInput,
  onSearchClick,
  parseCoords,
  searchCoords,
}) => {
  return (
    <div className="weather-search">
      <h2>Weather Data</h2>
      <h4>Enter city:</h4>
      <input
        type="text"
        placeholder="Search city"
        value={searchedCity}
        onChange={onSearchInput}
      />

      <button onClick={onSearchClick}>Fetch Weather</button>
      <h4>Or enter coordinates:</h4>
      <label>Latitude:</label>
      <input
        type="text"
        placeholder="Lat"
        name="lat"
        value={weatherData?.coord?.lat || ""}
        onChange={parseCoords}
      />

      <label>Longitude:</label>
      <input
        type="text"
        placeholder="Lon"
        name="lon"
        value={weatherData?.coord?.lon || ""}
        onChange={parseCoords}
      />
      <button
        onClick={() =>
          searchCoords(weatherData?.coord?.lat, weatherData?.coord?.lon)
        }
      >
        Search by Coordinates
      </button>
    </div>
  );
};

export default WeatherSearch;
