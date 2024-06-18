import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import schoolData from './schoolData.json';

const Compare = () => {
  const [schools, setSchools] = useState([]);
  const [selectedSchool1, setSelectedSchool1] = useState('');
  const [selectedSchool2, setSelectedSchool2] = useState('');
  const [school1, setSchool1] = useState(null);
  const [school2, setSchool2] = useState(null);

  useEffect(() => {
    // Simulating fetching data from JSON
    // Replace with actual fetch logic if data is fetched from an API
    setSchools(schoolData);
  }, []);

  const handleCompare = () => {
    const schoolData1 = schools.find(school => school.id === parseInt(selectedSchool1));
    const schoolData2 = schools.find(school => school.id === parseInt(selectedSchool2));
    setSchool1(schoolData1);
    setSchool2(schoolData2);
  };

  return (
    <div className="font-serif text-emerald-900 p-5 mb-10 overflow-y-scroll max-h-[calc(100vh-10px)]">
      <h1 className="text-center mb-10 font-cursive">Compare Schools</h1>
      <div className="flex flex-col items-center my-10">
        <select 
          onChange={e => setSelectedSchool1(e.target.value)}
          className="w-full p-2 mb-5 border border-gray-300 rounded"
        >
          <option value="">Select First School</option>
          {schools.map(school => (
            <option key={school.id} value={school.id}>
              {school.title}
            </option>
          ))}
        </select>
        <select 
          onChange={e => setSelectedSchool2(e.target.value)}
          className="w-full p-2 mb-5 border border-gray-300 rounded"
        >
          <option value="">Select Second School</option>
          {schools.map(school => (
            <option key={school.id} value={school.id}>
              {school.title}
            </option>
          ))}
        </select>
        <button 
          onClick={handleCompare}
          className="p-2 bg-gradient-to-r from-emerald-900 to-teal-700 text-gray-400 rounded-2xl hover:from-teal-700 hover:to-emerald-900 transition duration-300"
        >
          Compare
        </button>
      </div>
      {school1 && school2 && (
        <>
          <div className="overflow-x-auto mb-5">
            <table className="w-full border-collapse mb-5">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-2 text-left">Feature</th>
                  <th className="border p-2 text-left">{school1.title}</th>
                  <th className="border p-2 text-left">{school2.title}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Price (Class 11)</td>
                  <td className="border p-2">RS {school1.prices.class11}</td>
                  <td className="border p-2">RS {school2.prices.class11}</td>
                </tr>
                <tr>
                  <td className="border p-2">Price (Class 12)</td>
                  <td className="border p-2">RS {school1.prices.class12}</td>
                  <td className="border p-2">RS {school2.prices.class12}</td>
                </tr>
                <tr>
                  <td className="border p-2">Description</td>
                  <td className="border p-2">{school1.description}</td>
                  <td className="border p-2">{school2.description}</td>
                </tr>
                <tr>
                  <td className="border p-2">Infrastructure</td>
                  <td className="border p-2">{school1.infrastructure}</td>
                  <td className="border p-2">{school2.infrastructure}</td>
                </tr>
                <tr>
                  <td className="border p-2">Contact</td>
                  <td className="border p-2">{school1.contact.phone}</td>
                  <td className="border p-2">{school2.contact.phone}</td>
                </tr>
                <tr>
                  <td className="border p-2">Location</td>
                  <td className="border p-2">{school1.location.lat}, {school1.location.lng}</td>
                  <td className="border p-2">{school2.location.lat}, {school2.location.lng}</td>
                </tr>
                <tr>
                  <td className="border p-2">Courses</td>
                  <td className="border p-2">{school1.courses}</td>
                  <td className="border p-2">{school2.courses}</td>
                </tr>
                <tr>
                  <td className="border p-2">Rank</td>
                  <td className="border p-2">{school1.rank}</td>
                  <td className="border p-2">{school2.rank}</td>
                </tr>
                <tr>
                  <td className="border p-2">Alumni Total</td>
                  <td className="border p-2">{school1.alumniTotal}</td>
                  <td className="border p-2">{school2.alumniTotal}</td>
                </tr>
                <tr>
                  <td className="border p-2">Alumni Engineers</td>
                  <td className="border p-2">{school1.alumniEngineers}</td>
                  <td className="border p-2">{school2.alumniEngineers}</td>
                </tr>
                <tr>
                  <td className="border p-2">Alumni Doctors</td>
                  <td className="border p-2">{school1.alumniDoctors}</td>
                  <td className="border p-2">{school2.alumniDoctors}</td>
                </tr>
                <tr>
                  <td className="border p-2">Teachers</td>
                  <td className="border p-2">{school1.teachers}</td>
                  <td className="border p-2">{school2.teachers}</td>
                </tr>
                <tr>
                  <td className="border p-2">Teacher Qualifications</td>
                  <td className="border p-2">{school1.teacherQualifications}</td>
                  <td className="border p-2">{school2.teacherQualifications}</td>
                </tr>
                <tr>
                  <td className="border p-2">Passout Rate</td>
                  <td className="border p-2">{school1.passoutRate}</td>
                  <td className="border p-2">{school2.passoutRate}</td>
                </tr>
                <tr>
                  <td className="border p-2">Website</td>
                  <td className="border p-2">
                    <a
                      href={school1.website}
                      className="text-blue-500 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit {school1.title}
                    </a>
                  </td>
                  <td className="border p-2">
                    <a
                      href={school2.website}
                      className="text-blue-500 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit {school2.title}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="h-72 w-full mb-5">
            <h1 className="text-center mb-5 font-cursive">School Location on Map</h1>
            <MapContainer
              center={[school1.location.lat, school1.location.lng]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[school1.location.lat, school1.location.lng]}>
                <Popup>{school1.title}</Popup>
              </Marker>
              <Marker position={[school2.location.lat, school2.location.lng]}>
                <Popup>{school2.title}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default Compare;
