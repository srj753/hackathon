
import React, { useState } from 'react';
import Header  from "./Header";
import Note from "./Note";
import { Link } from 'react-router-dom'; 

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
      <h1 className="text-2xl mb-4">Note Sharing Platform</h1>



      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="p-2 mb-2 border border-gray-300 rounded-md"
      >
        <option value="" disabled>Select Option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <button className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-700">
        Submit
      </button>
      <Link to ='/Note'>
      <Note/>
      </Link>
      
    </div>
  </div>
  );
}

export default Home;
