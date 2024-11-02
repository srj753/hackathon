import React from "react";
import { Link } from 'react-router-dom'; 
import './header.css';

const Header = () => {
  return (
    <header className="header">
    <h1 className="text-3xl font-bold">Your Platform Name</h1>
    <p className="mt-2">A placeholder for the note-sharing platform</p>

    {/* Upload Button */}
    <Link to="/upload">
      <button className="upload-button">
        Upload
      </button>
    </Link>
  </header>

  );
};

export default Header;

