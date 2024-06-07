// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <nav className="navbar">
    <div className="nav">
      <ul className="menubar">
        <li><Link to="/" className="menu-btn">Home</Link></li>
        <li><Link to="/about" className="menu-btn">About</Link></li>
        <li><Link to="/skills" className="menu-btn">Skills</Link></li>
        <li><Link to="/contact" className="menu-btn">Contact</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
