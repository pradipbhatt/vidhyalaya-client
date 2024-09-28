import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SchoolList = () => {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/postschool');
        if (response.status === 200) {
          setSchools(response.data); // Assuming response.data is an array of schools
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
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="min-h-screen overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mt-60">Schools for +2</h1>
        <div className="overflow-y max-h-screen mt-10">
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : schools.length === 0 ? (
              <p className="text-center">No schools found.</p>
            ) : (
              schools.map((school) => (
                <div key={school._id} className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
                  <img
                    src={school.image}
                    alt={school.title}
                    className="w-full h-48 object-cover object-center"
                    onError={(e) => {
                      e.target.onerror = null; // Prevent infinite fallback loop
                      e.target.src = 'path/to/fallback-image.jpg'; // Set a fallback image
                    }}
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{school.title}</h2>
                    <p className="text-gray-700 mb-2">{school.description}</p>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600">
                        <span className="font-bold">Rank:</span> {school.rank}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-bold">Courses:</span> {school.courses}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-bold">Infrastructure:</span> {school.infrastructure}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-bold">Contact Phone:</span> {school.contact.phone}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-bold">Location:</span> {school.location.lat}, {school.location.lng}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">
                          <span className="font-bold">Total Alumni:</span> {school.alumniTotal}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-bold">Alumni Engineers:</span> {school.alumniEngineers}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-bold">Alumni Doctors:</span> {school.alumniDoctors}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">
                          <span className="font-bold">Teachers:</span> {school.teachers}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-bold">Teacher Qualifications:</span> {school.teacherQualifications}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-bold">Passout Rate:</span> {school.passoutRate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
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
