// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#3f51b5',
    padding: '1rem',
    color: 'white',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <nav style={navStyle}>
      <Link to="/students" style={linkStyle}>Students</Link>
      <Link to="/faculties" style={linkStyle}>Faculties</Link>
      <Link to="/bulk-upload" style={linkStyle}>Bulk Upload</Link>
    </nav>
  );
}

export default Navbar;
