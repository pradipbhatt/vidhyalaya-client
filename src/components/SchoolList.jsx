import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const SchoolList = () => {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/postschool');
        if (response.status === 200) {
          setSchools(response.data);
        } else {
          console.error('Failed to fetch schools');
        }
      } catch (error) {
        console.error('Error fetching schools:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchools();
  }, []);

  return (
    <div className=" flex flex-col items-center">
      <div className=" w-full mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-teal-900 mt-20 mb-4">Schools for +2</h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {loading ? (
            <p className="text-center text-white">Loading...</p>
          ) : schools.length === 0 ? (
            <p className="text-center text-white">No schools found.</p>
          ) : (
            schools.map((school) => (
              <motion.div
                key={school._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={school.image}
                  alt={school.title}
                  className="w-full h-48 object-cover object-center"
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite fallback loop
                    e.target.src = 'path/to/fallback-image.jpg'; // Set a fallback image
                  }}
                />
                <div className="p-4 bg-gray-50"> {/* Add background color for card */}
                  <h2 className="text-2xl font-bold text-black mb-2 text-[#00274D]">{school.title}</h2>
                  <p className="text-gray-700 mb-2 ">{school.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-bold text-[#00274D]">Rank:</span> {school.rank}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-bold text-[#00274D]">Courses:</span> {school.courses}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-bold text-[#00274D]">Infrastructure:</span> {school.infrastructure}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-bold text-[#00274D]">Contact Phone:</span> {school.contact.phone}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-bold text-[#00274D]">Location:</span> {school.location.lat}, {school.location.lng}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">
                        <span className="font-bold text-[#00274D]">Total Alumni:</span> {school.alumniTotal}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-bold text-[#00274D]">Alumni Engineers:</span> {school.alumniEngineers}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-bold text-[#00274D]">Alumni Doctors:</span> {school.alumniDoctors}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">
                        <span className="font-bold text-[#00274D]">Teachers:</span> {school.teachers}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-bold text-[#00274D]">Teacher Qualifications:</span> {school.teacherQualifications}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-bold text-[#00274D]">Passout Rate:</span> {school.passoutRate}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
      <style>
        {`
          /* Hide scrollbar for Chrome, Safari and Opera */
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default SchoolList;
