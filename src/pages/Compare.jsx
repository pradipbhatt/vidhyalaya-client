import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Chat from './Chat';

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Compare = () => {
  const [schools, setSchools] = useState([]);
  const [selectedSchools, setSelectedSchools] = useState([]);
  const [comparedSchools, setComparedSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/postschool');
        setSchools(response.data);
      } catch (error) {
        console.error('Error fetching schools:', error);
      }
    };

    fetchSchools();
  }, []);

  const handleSelectSchool = (schoolId, index) => {
    const updatedSelection = [...selectedSchools];
    updatedSelection[index] = schoolId; // Update the selected school for the specific dropdown
    setSelectedSchools(updatedSelection);
  };

  const handleCompare = () => {
    const filteredSchools = schools.filter((school) =>
      selectedSchools.includes(school._id)
    );
    setComparedSchools(filteredSchools);
  };

  // Calculate the center point for the map based on the selected schools' locations
  const calculateMapCenter = () => {
    if (comparedSchools.length === 0) return [27.7172, 85.324]; // Default to Kathmandu
    const lat = comparedSchools.reduce((sum, school) => sum + school.location.lat, 0) / comparedSchools.length;
    const lng = comparedSchools.reduce((sum, school) => sum + school.location.lng, 0) / comparedSchools.length;
    return [lat, lng];
  };

  return (
   <>
    <motion.div 
      className="container px-8 py-8 bg-gradient-to-r from-[rgba(4,81,97,0.5)] via-[rgba(4,81,97,0.3)] to-[rgba(4,81,97,0)]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Compare Schools</h2>

      {/* Selection Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Select School {index + 1}</h3>
            <select
              className="form-select block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2 bg-gradient-to-r from-[rgba(4,81,97,0.5)] via-[rgba(4,81,97,0.3)] to-[rgba(4,81,97,0)]"
              onChange={(e) => handleSelectSchool(e.target.value, index)}
              value={selectedSchools[index] || ''}
            >
              <option value="">-- Select a school --</option>
              {schools.map((school) => (
                <option key={school._id} value={school._id}>
                  {school.title}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Compare Button */}
      <div className="text-center mb-8">
        <button
          className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-300  
          ${selectedSchools.filter(Boolean).length === 2 ? 'bg-teal-700 transition-all duration-1000 ease-in-out hover:bg-gradient-to-r hover:from-teal-800 hover:to-teal-400' : 'bg-gray-400 cursor-not-allowed'}`}
          onClick={handleCompare}
          disabled={selectedSchools.filter(Boolean).length < 2}
        >
          Compare
        </button>
      </div>

      {/* Comparison Results */}
      {comparedSchools.length > 0 && (
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Comparison Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {comparedSchools.map((school) => (
              <motion.div 
                key={school._id} 
                className="border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-xl font-semibold text-blue-600">{school.title}</h3>
                <img src={school.image} alt={school.title} className="mt-4 mb-4 rounded-lg w-full" />
                <table className="w-full mt-4 text-left border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Description:</td>
                      <td className="py-2">{school.description}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Infrastructure:</td>
                      <td className="py-2">{school.infrastructure}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Rank:</td>
                      <td className="py-2">{school.rank}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Total Alumni:</td>
                      <td className="py-2">{school.alumniTotal}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Alumni Engineers:</td>
                      <td className="py-2">{school.alumniEngineers}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Alumni Doctors:</td>
                      <td className="py-2">{school.alumniDoctors}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Teachers:</td>
                      <td className="py-2">{school.teachers}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Teacher Qualifications:</td>
                      <td className="py-2">{school.teacherQualifications}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Passout Rate:</td>
                      <td className="py-2">{school.passoutRate}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Prices:</td>
                      <td className="py-2">{JSON.stringify(school.prices)}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Location:</td>
                      <td className="py-2">{JSON.stringify(school.location)}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Courses:</td>
                      <td className="py-2">{school.courses.join(", ")}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Contact:</td>
                      <td className="py-2">{JSON.stringify(school.contact)}</td>
                    </tr>
                  </tbody>
                </table>
                <a
                  href={school.showMoreUrl}
                  className="mt-4 inline-block text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Show More
                </a>
              </motion.div>
            ))}
          </div>

          {/* Map Display */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">School Locations</h3>
            <MapContainer center={calculateMapCenter()} zoom={13} style={{ height: '500px', width: '100%' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {comparedSchools.map((school) => (
                <Marker key={school._id} position={[school.location.lat, school.location.lng]}>
                  <Popup>{school.title}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
    <Chat/>
    <Footer />
    </>
  );
};

export default Compare;
