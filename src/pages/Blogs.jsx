import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '', // Initialize author field
  });
  const [expandedPostIds, setExpandedPostIds] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch current user data from Redux state
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      setFormData({
        ...formData,
        author: `${currentUser.name} (${currentUser.email})`, // Populate author field with current user's name and email
      });
    }
    fetchPosts();
  }, [currentUser]); // Trigger effect when currentUser changes

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://vidhyalaya-backend.onrender.com/api/post');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error.message);
      toast.error(`Failed to fetch posts: ${error.message}`);
    }
  };

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
      const response = await axios.post('https://vidhyalaya-backend.onrender.com/api/post', formData);
      if (response.status === 201) {
        toast.success('Post created successfully!');
        setFormData({ title: '', content: '', author: formData.author }); // Reset form fields with current user's name and email
        fetchPosts();
      } else {
        toast.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
      toast.error(`Failed to submit form: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleReadMore = (postId) => {
    setExpandedPostIds((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
  };

  return (
    <div className="flex flex-col items-center p-4 overflow-y-auto h-screen bg-gray-100 mt-20">
      <div className="w-full max-w-screen-lg bg-white shadow-md rounded-lg p-6 mb-4">
        <h1 className="text-2xl font-bold text-center mb-6">Create a Blog Post</h1>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Content"
              rows="4"
              className="border border-gray-300 rounded-md px-3 py-2 w-full resize-none focus:outline-none focus:border-blue-500"
              required
            ></textarea>
            <input
              type="text"
              name="author"
              value={formData.author}
              readOnly // Make the author field read-only
              className="border border-gray-300 rounded-md px-3 py-2 w-full bg-gray-100"
              disabled
            />
            <button
              type="submit"
              className={`bg-blue-500 text-white rounded-md px-4 py-2 w-full ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-600'
              } transition duration-300`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Post'}
            </button>
          </div>
        </form>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg mt-8">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          posts.map((post) => (
            <div key={post._id} className="bg-white shadow-md rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <h2 className="text-lg font-bold px-6 py-4">{post.title}</h2>
              <div className={`text-sm text-gray-600 px-6 ${expandedPostIds.includes(post._id) ? '' : 'line-clamp-3'}`} style={{ whiteSpace: 'pre-wrap' }}>
                {post.content}
              </div>
              <p className="text-xs text-gray-700 px-6 mt-2">Author: {post.author}</p>
              <button
                className="bg-blue-500 text-white rounded-md px-4 py-2 mx-6 mt-2 mb-4 hover:bg-blue-600 transition duration-300"
                onClick={() => toggleReadMore(post._id)}
              >
                {expandedPostIds.includes(post._id) ? 'Read Less' : 'Read More'}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blogs;
