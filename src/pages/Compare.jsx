import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import schoolData from './schoolData.json';

const PageContainer = styled('div')({
  fontFamily: 'Times New Roman, Times, serif',
  color: '#003322',
  padding: '20px',
  marginBottom: '40px',
  overflowY: 'scroll',
  maxHeight: 'calc(100vh - 10px)',
});

const Heading = styled('h1')({
  textAlign: 'center',
  marginBottom: '40px',
  fontFamily: 'cursive',
});

const CompareContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '40px',
});

const Select = styled('select')({
  width: '100%',
  padding: '8px',
  marginBottom: '20px',
});

const Button = styled('button')({
  padding: '10px 20px',
  background: 'linear-gradient(to right, #003322, #004d40)',
  color: '#fff',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(to right, #004d40, #003322)',
  },
});

const TableContainer = styled('div')({
  overflowX: 'auto',
});

const Table = styled('table')({
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '20px',
});

const TableHead = styled('thead')({
  backgroundColor: '#f2f2f2',
});

const TableRow = styled('tr')({});

const TableHeading = styled('th')({
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
});

const TableData = styled('td')({
  border: '1px solid #ddd',
  padding: '8px',
});

const MapWrapper = styled('div')({
  height: '300px',
  width: '100%',
  marginBottom: '20px',
});

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
    <>
      <PageContainer>
        <Heading>Compare Schools</Heading>
        <CompareContainer>
          <Select onChange={e => setSelectedSchool1(e.target.value)}>
            <option value="">Select First School</option>
            {schools.map(school => (
              <option key={school.id} value={school.id}>
                {school.title}
              </option>
            ))}
          </Select>
          <Select onChange={e => setSelectedSchool2(e.target.value)}>
            <option value="">Select Second School</option>
            {schools.map(school => (
              <option key={school.id} value={school.id}>
                {school.title}
              </option>
            ))}
          </Select>
          <Button onClick={handleCompare}>Compare</Button>
        </CompareContainer>
        {school1 && school2 && (
          <>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeading>Feature</TableHeading>
                    <TableHeading>{school1.title}</TableHeading>
                    <TableHeading>{school2.title}</TableHeading>
                  </TableRow>
                </TableHead>
                <tbody>
                  <TableRow>
                    <TableData>Price (Class 11)</TableData>
                    <TableData>RS {school1.prices.class11}</TableData>
                    <TableData>RS {school2.prices.class11}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Price (Class 12)</TableData>
                    <TableData>RS {school1.prices.class12}</TableData>
                    <TableData>RS {school2.prices.class12}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Description</TableData>
                    <TableData>{school1.description}</TableData>
                    <TableData>{school2.description}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Infrastructure</TableData>
                    <TableData>{school1.infrastructure}</TableData>
                    <TableData>{school2.infrastructure}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Contact</TableData>
                    <TableData>{school1.contact.phone}</TableData>
                    <TableData>{school2.contact.phone}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Location</TableData>
                    <TableData>{school1.location.lat}, {school1.location.lng}</TableData>
                    <TableData>{school2.location.lat}, {school2.location.lng}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Courses</TableData>
                    <TableData>{school1.courses}</TableData>
                    <TableData>{school2.courses}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Rank</TableData>
                    <TableData>{school1.rank}</TableData>
                    <TableData>{school2.rank}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Alumni Total</TableData>
                    <TableData>{school1.alumniTotal}</TableData>
                    <TableData>{school2.alumniTotal}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Alumni Engineers</TableData>
                    <TableData>{school1.alumniEngineers}</TableData>
                    <TableData>{school2.alumniEngineers}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Alumni Doctors</TableData>
                    <TableData>{school1.alumniDoctors}</TableData>
                    <TableData>{school2.alumniDoctors}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Teachers</TableData>
                    <TableData>{school1.teachers}</TableData>
                    <TableData>{school2.teachers}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Teacher Qualifications</TableData>
                    <TableData>{school1.teacherQualifications}</TableData>
                    <TableData>{school2.teacherQualifications}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Passout Rate</TableData>
                    <TableData>{school1.passoutRate}</TableData>
                    <TableData>{school2.passoutRate}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Website</TableData>
                    <TableData>
                      <a
                        href={school1.website}
                        className="text-blue-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit {school1.title}
                      </a>
                    </TableData>
                    <TableData>
                      <a
                        href={school2.website}
                        className="text-blue-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit {school2.title}
                      </a>
                    </TableData>
                  </TableRow>
                </tbody>
              </Table>
            </TableContainer>
            <MapWrapper>
              <Heading>School Location on Map</Heading>
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
            </MapWrapper>
          </>
        )}
        {/* <Footer /> */}
      </PageContainer>
    </>
  );
};

export default Compare;