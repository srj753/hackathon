
import React, { useState } from 'react';
import Header  from "./Header";
import Note from "./Note";
import { Link } from 'react-router-dom'; 
import Navbar from './navbar';

// Components for each option
const Option1Component = () => <div>This is Option 1 component.</div>;
const Option2Component = () => <div>This is Option 2 component.</div>;
const Option3Component = () => <div>This is Option 3 component.</div>;

function Home() {
  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState("");

  // Handle change event for dropdown
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
    <Header />
    {/* Dropdown */}
    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg">

      <Navbar />
      <Link to ='/Note'>
      <Note/>
      </Link>
      
    </div>
  </div>
  );
}

export default Home;
