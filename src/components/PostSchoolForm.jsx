import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const PostSchoolForm = ({ fetchPosts }) => {
  const [formData, setFormData] = useState({
    title: '',
    prices: {
      class11: '',
      class12: '',
    },
    description: '',
    infrastructure: '',
    contact: {
      phone: '',
    },
    location: {
      lat: '',
      lng: '',
    },
    courses: '',
    rank: '',
    alumniTotal: '',
    alumniEngineers: '',
    alumniDoctors: '',
    teachers: '',
    teacherQualifications: '',
    passoutRate: '',
    image: '',
    showMoreUrl: '',
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
      const response = await axios.post('https://vidhyalaya-backend.onrender.com/api/postschool', formData);
      if (response.status === 201) {
        toast.success('Post created successfully!', {
          style: {
            background: 'linear-gradient(90deg, rgba(74,222,128,1) 0%, rgba(52,211,153,1) 100%)',
            color: '#fff',
          },
        });
        setFormData({
          title: '',
          prices: {
            class11: '',
            class12: '',
          },
          description: '',
          infrastructure: '',
          contact: {
            phone: '',
          },
          location: {
            lat: '',
            lng: '',
          },
          courses: '',
          rank: '',
          alumniTotal: '',
          alumniEngineers: '',
          alumniDoctors: '',
          teachers: '',
          teacherQualifications: '',
          passoutRate: '',
          image: '',
          showMoreUrl: '',
        });
        fetchPosts();
      } else {
        toast.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      // toast.error('An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center py-20 mt-60">
      <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg mt-60 ">
        <h1 className="text-2xl font-bold text-center mb-6">Create a School Post</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
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
          <div className="mb-4">
            <label htmlFor="courses" className="block text-sm font-medium text-gray-700">
              Courses Offered
            </label>
            <input
              id="courses"
              type="text"
              name="courses"
              value={formData.courses}
              onChange={handleChange}
              placeholder="Enter courses"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
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
            <div className="flex-1">
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
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label htmlFor="alumniEngineers" className="block text-sm font-medium text-gray-700">
                Alumni Engineers
              </label>
              <input
                id="alumniEngineers"
                type="number"
                name="alumniEngineers"
                value={formData.alumniEngineers}
                onChange={handleChange}
                placeholder="Enter alumni engineers"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="alumniDoctors" className="block text-sm font-medium text-gray-700">
                Alumni Doctors
              </label>
              <input
                id="alumniDoctors"
                type="number"
                name="alumniDoctors"
                value={formData.alumniDoctors}
                onChange={handleChange}
                placeholder="Enter alumni doctors"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label htmlFor="teachers" className="block text-sm font-medium text-gray-700">
                Number of Teachers
              </label>
              <input
                id="teachers"
                type="number"
                name="teachers"
                value={formData.teachers}
                onChange={handleChange}
                placeholder="Enter number of teachers"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex-1">
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
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label htmlFor="passoutRate" className="block text-sm font-medium text-gray-700">
                Passout Rate
              </label>
              <input
                id="passoutRate"
                type="text"
                name="passoutRate"
                value={formData.passoutRate}
                onChange={handleChange}
                placeholder="Enter passout rate"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                id="image"
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Enter image URL"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="showMoreUrl" className="block text-sm font-medium text-gray-700">
              Show More URL
            </label>
            <input
              id="showMoreUrl"
              type="text"
              name="showMoreUrl"
              value={formData.showMoreUrl}
              onChange={handleChange}
              placeholder="Enter show more URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default PostSchoolForm;

