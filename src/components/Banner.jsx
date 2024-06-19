import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Banner = () => {
  const [selectedSchool, setSelectedSchool] = useState('');
  const navigate = useNavigate();

  // Mapping of school names to their corresponding IDs
  const schoolMap = {
    "Radiant Secondary School": 1,
    "LBA": 2,
    "SPA": 3,
    "Sadharan mavi": 4,
    "Morning Glory": 5,
  };

  const handleFind = () => {
    if (selectedSchool) {
      const schoolId = schoolMap[selectedSchool];
      if (schoolId) {
        navigate(`/schools/${schoolId}`);
      } else {
        alert('Please select a valid school.');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 bg-gray-100">
      <div className="container mx-auto text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-teal-500 mt-16 md:mt-24 lg:mt-32">
          Let's <br />
          <span className="text-black">
            <Typewriter
              options={{
                strings: ['Compare ', 'Connect ', 'Discover '],
                autoStart: true,
                loop: true,
              }}
            />
          </span>{' '}
          <br />
          <span className="text-teal-500">the best</span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mt-4 mb-8">
          schools
        </h2>
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
          <select
            className="p-3 bg-teal-500 text-white font-semibold rounded-lg outline-none flex-grow mb-4 md:mb-0 md:mr-2 sm:w-1/2"
            onChange={(e) => setSelectedSchool(e.target.value)}
          >
            <option value="">Select a school</option>
            <option value="Radiant Secondary School">Radiant Secondary School</option>
            <option value="LBA">LBA</option>
            <option value="SPA">SPA</option>
            <option value="Sadharan mavi">Sadharan mavi</option>
            <option value="Morning Glory">Morning Glory</option>
            {/* Add more options as needed */}
          </select>
          <input
            type="text"
            placeholder="Enter School Name"
            value={selectedSchool}
            onChange={(e) => setSelectedSchool(e.target.value)}
            className="p-3 text-gray-600 outline-none flex-grow mb-4 md:mb-0 md:mr-2 sm:w-full"
            style={{
              borderRadius: '0.5rem',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          />
          <button
            onClick={handleFind}
            className="p-3 bg-teal-500 text-white font-semibold rounded-lg w-full md:w-auto"
            style={{
              borderRadius: '0.5rem',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            Find
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
