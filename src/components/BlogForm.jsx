import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const BlogForm = ({ fetchPosts }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:8081/api/post', formData);
      if (response.status === 201) {
        toast.success('Post created successfully!', {
          style: {
            background:
              'linear-gradient(90deg, rgba(74,222,128,1) 0%, rgba(52,211,153,1) 100%)',
            color: '#fff',
          },
        });
        setFormData({ title: '', content: '', author: '' });
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-8">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-102 mb-4">
        <h1 className="text-2xl font-bold text-center mb-6">Create a Blog Post</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
          />
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Content"
            rows="8"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
          ></textarea>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default BlogForm;
