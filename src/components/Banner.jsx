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
    <div className="flex flex-col items-center justify-center px-4  ">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-16 md:mt-24 lg:mt-32 text-[#00274D]">
          We help you <br />
          <span className=" text-[#00274D]">
            <Typewriter
              options={{
                strings: ['find colleges ', 'compare colleges '],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <br />
          <span className="text-white text-[#00274D]">Best</span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mt-4 mb-8 text-[#00274D]">
          Colleges for +2 in Far West, Nepal.
        </h2>
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 mb-4 ">
          <select
            className="p-3 bg-[#00274D] text-white font-semibold rounded-lg outline-none flex-grow mb-4 md:mb-0 md:mr-2 sm:w-1/2"
            onChange={(e) => setSelectedSchool(e.target.value)}
          >
            <option  className='bg-white text-black' value="">Select College</option>
            <option className='bg-white text-black' value="Radiant Secondary School">Radiant Secondary School</option>
            <option className='bg-white text-black' value="LBA">LBA</option>
            <option className='bg-white text-black' value="SPA">SPA</option>
            <option className='bg-white text-black' value="Sadharan mavi">Sadharan Secondary School</option>
            <option  className='bg-white text-black' value="Morning Glory">Morning Glory</option>
          </select>
          <input
            type="text"
            placeholder="Enter the name of the school"
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
            className="p-3 bg-[#00274D] text-white font-semibold rounded-lg w-full md:w-auto"
            style={{
              borderRadius: '0.5rem',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
