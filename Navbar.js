// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>
        Check Weather
      </Link>
      <Link to="/temperature" style={styles.link}>
        Check Temperature
      </Link>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#007bff',
  },
  link: {
    margin: '0 15px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
};

export default Navbar;