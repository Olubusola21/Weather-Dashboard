// src/components/TemperaturePage.js
import React, { useState } from 'react';
import axios from 'axios';

const TemperaturePage = () => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);
    setTemperature(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setTemperature(response.data.main.temp);
    } catch (err) {
      setError('City not found. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Check Temperature</h1>
      <form onSubmit={handleSearch} style={styles.form}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
      {temperature !== null && (
        <div style={styles.temperatureInfo}>
          <h2>Temperature: {temperature}°C</h2>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  form: {
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  temperatureInfo: {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    display: 'inline-block',
    textAlign: 'left',
  },
};

export default TemperaturePage;