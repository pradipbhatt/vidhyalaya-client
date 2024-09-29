import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const PostSchoolForm = ({ fetchPosts }) => {
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle nested fields like prices, contact, and location
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:8081/api/postschool', formData);
      
      // Check if the response is successful
      if (response.status === 201) {
          toast.success('Post created successfully!', {
              style: {
                  background: 'linear-gradient(90deg, rgba(74,222,128,1) 0%, rgba(52,211,153,1) 100%)',
                  color: '#fff',
              },
          });
          
          // Reset form to default values
          setFormData({
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
          fetchPosts();
      } else {
          // Provide more specific feedback based on response status
          toast.error(`Failed to create post: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error creating post:', error);
      
      // Check if error response exists to provide specific feedback
      if (error.response) {
          toast.error(`Error: ${error.response.data.message || 'An error occurred'}`);
      } else {
          // toast.error('An unexpected error occurred');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
   <>
   <div className="h-screen w-full flex items-center justify-center bg-gray-100">
  <Toaster />
  <div className="h-full w-full p-0 bg-white"> {/* Full-screen form container */}
    <h1 className="text-2xl font-bold text-center mb-6">Create a School Post</h1>
    <form className="space-y-4 h-full flex flex-col justify-between" onSubmit={handleSubmit}> {/* Use flexbox to fill the height */}
      
      {/* Title Input */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter title"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Price Inputs */}
      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label htmlFor="class11" className="block text-sm font-medium text-gray-700">
            Class 11 Price
          </label>
          <input
            id="class11"
            type="number"
            name="prices.class11"
            value={formData.prices.class11}
            onChange={handleChange}
            placeholder="Enter price"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="class12" className="block text-sm font-medium text-gray-700">
            Class 12 Price
          </label>
          <input
            id="class12"
            type="number"
            name="prices.class12"
            value={formData.prices.class12}
            onChange={handleChange}
            placeholder="Enter price"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Description Input */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
          rows="4"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
        ></textarea>
      </div>

      {/* Infrastructure Input */}
      <div className="mb-4">
        <label htmlFor="infrastructure" className="block text-sm font-medium text-gray-700">
          Infrastructure
        </label>
        <input
          id="infrastructure"
          type="text"
          name="infrastructure"
          value={formData.infrastructure}
          onChange={handleChange}
          placeholder="Enter infrastructure details"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Contact Phone Input */}
      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Contact Phone
          </label>
          <input
            id="phone"
            type="text"
            name="contact.phone"
            value={formData.contact.phone}
            onChange={handleChange}
            placeholder="Enter contact phone"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Location Input */}
      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label htmlFor="latitude" className="block text-sm font-medium text-gray-700">
            Latitude
          </label>
          <input
            id="latitude"
            type="number"
            name="location.lat"
            value={formData.location.lat}
            onChange={handleChange}
            placeholder="Enter latitude"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="longitude" className="block text-sm font-medium text-gray-700">
            Longitude
          </label>
          <input
            id="longitude"
            type="number"
            name="location.lng"
            value={formData.location.lng}
            onChange={handleChange}
            placeholder="Enter longitude"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Additional Fields */}
      <div className="mb-4">
        <label htmlFor="courses" className="block text-sm font-medium text-gray-700">
          Courses
        </label>
        <input
          id="courses"
          type="text"
          name="courses"
          value={formData.courses}
          onChange={handleChange}
          placeholder="Enter courses offered"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Rank Input */}
      <div className="mb-4">
        <label htmlFor="rank" className="block text-sm font-medium text-gray-700">
          Rank
        </label>
        <input
          id="rank"
          type="number"
          name="rank"
          value={formData.rank}
          onChange={handleChange}
          placeholder="Enter rank"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Alumni Total Input */}
      <div className="mb-4">
        <label htmlFor="alumniTotal" className="block text-sm font-medium text-gray-700">
          Total Alumni
        </label>
        <input
          id="alumniTotal"
          type="number"
          name="alumniTotal"
          value={formData.alumniTotal}
          onChange={handleChange}
          placeholder="Enter total alumni"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Alumni Engineers Input */}
      <div className="mb-4">
        <label htmlFor="alumniEngineers" className="block text-sm font-medium text-gray-700">
          Alumni Engineers
        </label>
        <input
          id="alumniEngineers"
          type="number"
          name="alumniEngineers"
          value={formData.alumniEngineers}
          onChange={handleChange}
          placeholder="Enter number of alumni engineers"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Alumni Doctors Input */}
      <div className="mb-4">
        <label htmlFor="alumniDoctors" className="block text-sm font-medium text-gray-700">
          Alumni Doctors
        </label>
        <input
          id="alumniDoctors"
          type="number"
          name="alumniDoctors"
          value={formData.alumniDoctors}
          onChange={handleChange}
          placeholder="Enter number of alumni doctors"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Teachers Input */}
      <div className="mb-4">
        <label htmlFor="teachers" className="block text-sm font-medium text-gray-700">
          Total Teachers
        </label>
        <input
          id="teachers"
          type="number"
          name="teachers"
          value={formData.teachers}
          onChange={handleChange}
          placeholder="Enter total teachers"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Teacher Qualifications Input */}
      <div className="mb-4">
        <label htmlFor="teacherQualifications" className="block text-sm font-medium text-gray-700">
          Teacher Qualifications
        </label>
        <input
          id="teacherQualifications"
          type="text"
          name="teacherQualifications"
          value={formData.teacherQualifications}
          onChange={handleChange}
          placeholder="Enter teacher qualifications"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Create Post
      </button>
    </form>
  </div>
</div>
   </>

  
  );
};

export default PostSchoolForm;
