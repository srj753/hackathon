import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        {/* Dropdown */}
        <select className="dropdown">
          <option value="" disabled>Select Option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option1">kendrick</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option1">science</option>
          <option value="option2">Option 2</option>
          <option value="option3">english</option>
        </select>

        {/* Search button */}
        <button className="search-button">Search</button>
      </div>

      {/* Add button on the right */}
      <Link to="/upload">
        <button className="add-button">Add Note</button>
      </Link>
    </div>
  );
}

export default Navbar;
