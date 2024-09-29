import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
  });
  const [expandedPostIds, setExpandedPostIds] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      setFormData({
        ...formData,
        author: `${currentUser.name} (${currentUser.email})`,
      });
    }
    fetchPosts();
  }, [currentUser]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/post');
      const sortedPosts = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setPosts(sortedPosts);
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
      const response = await axios.post('http://localhost:8081/api/post', formData);
      if (response.status === 201) {
        toast.success('Post created successfully!');
        setFormData({ title: '', content: '', author: formData.author });
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
    <div className="flex flex-col items-center p-6 bg-gradient-to-r from-[rgba(4,81,97,0.5)] via-[rgba(4,81,97,0.3)] to-[rgba(4,81,97,0)]  text-teal-900 mt-14">
      <Toaster position="top-right" reverseOrder={false} />
      
      {/* Blog Post Creation Form */}
      <motion.div 
        className="w-full max-w-2xl bg-blue-100 shadow-lg rounded-lg p-6 mb-8"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">Share Your Memories #FWU-DIARY</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Blog Title"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-600 transition duration-200"
            required
          />
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your story..."
            rows="5"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 resize-none focus:outline-none focus:border-blue-600 transition duration-200"
            required
          ></textarea>
          <input
            type="text"
            name="author"
            value={formData.author}
            readOnly
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 bg-gray-100 cursor-not-allowed"
            disabled
          />
          <button
            type="submit"
            className={`bg-blue-600 text-white rounded-md px-4 py-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'} transition duration-300`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Post'}
          </button>
        </form>
      </motion.div>

      {/* Blog Feed */}
      <div className="grid grid-cols-1 gap-6 w-full max-w-2xl">
        {posts.length === 0 ? (
          <p className="text-center text-gray-200">No posts available. Be the first to share!</p>
        ) : (
          posts.map((post) => (
            <motion.div 
              key={post._id} 
              className="bg-white shadow-lg rounded-lg p-4"
              initial={{ opacity: 0, translateY: 20 }} 
              animate={{ opacity: 1, translateY: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
              <p className={`text-gray-700 ${expandedPostIds.includes(post._id) ? '' : 'line-clamp-3'}`} style={{ whiteSpace: 'pre-wrap' }}>
                {post.content}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                <p>By: {post.author}</p>
                <p>{new Date(post.createdAt).toLocaleString()}</p>
              </div>
              <button
                className="bg-blue-600 text-white rounded-md px-4 py-1 mt-2 hover:bg-blue-700 transition duration-300"
                onClick={() => toggleReadMore(post._id)}
              >
                {expandedPostIds.includes(post._id) ? 'Read Less' : 'Read More'}
              </button>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blogs;
