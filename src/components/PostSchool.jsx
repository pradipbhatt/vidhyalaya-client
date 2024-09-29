import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostSchool = () => {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSchool, setCurrentSchool] = useState(null);
  const [formData, setFormData] = useState({
    title: 'Default School Title',
    prices: {
      class11: 1000,
      class12: 1200,
    },
    description: 'Default description of the school.',
    infrastructure: 'Default infrastructure details.',
    contact: {
      phone: '1234567890',
    },
    location: {
      lat: 27.7172,
      lng: 85.324,
    },
    courses: 'Science, Mathematics, English',
    rank: 1,
    alumniTotal: 500,
    alumniEngineers: 300,
    alumniDoctors: 150,
    teachers: 20,
    teacherQualifications: 'Master\'s Degree',
    passoutRate: '95%',
    image: 'https://www.soenotes.com/assets/fwu-CeXT1Quv.jpeg',
    showMoreUrl: 'https://example.com',
  });

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

  // Handle form changes, accounting for nested fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes('.')) {
      // For nested fields
      const [parent, child] = name.split('.');
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      // For non-nested fields
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle the delete operation
  const handleDelete = async (schoolId) => {
    try {
      await axios.delete(`http://localhost:8081/api/postschool/${schoolId}`);
      setSchools(schools.filter((school) => school._id !== schoolId));
    } catch (error) {
      console.error('Error deleting school:', error);
    }
  };

  // Handle the update operation
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8081/api/postschool/${currentSchool._id}`, formData);
      setSchools((prevSchools) =>
        prevSchools.map((school) => (school._id === currentSchool._id ? { ...school, ...formData } : school))
      );
      resetForm();
    } catch (error) {
      console.error('Error updating school:', error);
    }
  };

  // Handle the create operation
  const handleCreate = async () => {
    try {
      const response = await axios.post('http://localhost:8081/api/postschool', formData);
      setSchools([...schools, response.data]); // Add the new school to the state
      resetForm();
    } catch (error) {
      console.error('Error creating school:', error);
    }
  };

  // Reset form data
  const resetForm = () => {
    setCurrentSchool(null);
    setFormData({
      title: '',
      description: '',
      rank: '',
      courses: '',
      infrastructure: '',
      contact: { phone: '' },
      location: { lat: '', lng: '' },
      alumniTotal: '',
      alumniEngineers: '',
      alumniDoctors: '',
      teachers: '',
      teacherQualifications: '',
      passoutRate: '',
    });
  };

  // Set current school for updating
  const startUpdating = (school) => {
    setCurrentSchool(school);
    setFormData({
      title: school.title,
      description: school.description,
      rank: school.rank,
      courses: school.courses,
      infrastructure: school.infrastructure,
      contact: { phone: school.contact.phone },
      location: { lat: school.location.lat, lng: school.location.lng },
      alumniTotal: school.alumniTotal,
      alumniEngineers: school.alumniEngineers,
      alumniDoctors: school.alumniDoctors,
      teachers: school.teachers,
      teacherQualifications: school.teacherQualifications,
      passoutRate: school.passoutRate,
    });
  };

  return (
    <div className="min-h-screen py-2 mt-0">
      <div className="mt-8 p-4 border border-gray-300 rounded">
        <h2 className="text-2xl font-bold mb-4">{currentSchool ? 'Update School Information' : 'Add New School'}</h2>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2 mb-2 w-full"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="rank"
          value={formData.rank}
          onChange={handleChange}
          placeholder="Rank"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="courses"
          value={formData.courses}
          onChange={handleChange}
          placeholder="Courses"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="infrastructure"
          value={formData.infrastructure}
          onChange={handleChange}
          placeholder="Infrastructure"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="contact.phone"
          value={formData.contact.phone}
          onChange={handleChange}
          placeholder="Contact Phone"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="location.lat"
          value={formData.location.lat}
          onChange={handleChange}
          placeholder="Location Latitude"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="location.lng"
          value={formData.location.lng}
          onChange={handleChange}
          placeholder="Location Longitude"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="alumniTotal"
          value={formData.alumniTotal}
          onChange={handleChange}
          placeholder="Total Alumni"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="alumniEngineers"
          value={formData.alumniEngineers}
          onChange={handleChange}
          placeholder="Alumni Engineers"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="alumniDoctors"
          value={formData.alumniDoctors}
          onChange={handleChange}
          placeholder="Alumni Doctors"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="teachers"
          value={formData.teachers}
          onChange={handleChange}
          placeholder="Teachers"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="teacherQualifications"
          value={formData.teacherQualifications}
          onChange={handleChange}
          placeholder="Teacher Qualifications"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="passoutRate"
          value={formData.passoutRate}
          onChange={handleChange}
          placeholder="Passout Rate"
          className="border p-2 mb-2 w-full"
        />
        <button 
          onClick={currentSchool ? handleUpdate : handleCreate} 
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {currentSchool ? 'Save Changes' : 'Add School'}
        </button>
      </div>
      
      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl font-bold text-center">Schools for +2</h1>
        {loading ? (
          <p className="text-center">Loading schools...</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {schools.map((school) => (
              <div key={school._id} className="p-4 border rounded shadow">
                <h3 className="text-xl font-bold">{school.title}</h3>
                <p>{school.description}</p>
                <p>Rank: {school.rank}</p>
                <button 
                  onClick={() => startUpdating(school)} 
                  className="bg-yellow-500 text-white px-4 py-2 rounded mt-2"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(school._id)} 
                  className="bg-red-500 text-white px-4 py-2 rounded mt-2 ml-2"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostSchool;
