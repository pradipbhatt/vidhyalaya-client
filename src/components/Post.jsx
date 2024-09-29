import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('Admin');
  const [editingPostId, setEditingPostId] = useState(null);

  const baseURL = 'http://localhost:8081/api/post';

  // Fetch all posts from the API
  const fetchPosts = async () => {
    try {
      const response = await axios.get(baseURL);
      setPosts(response.data);
    } catch (error) {
      toast.error('Failed to fetch posts: ' + error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Create a new post
  const handleCreatePost = async () => {
    if (!title || !content || !author) {
      toast.error('Title, content, and author are required!');
      return;
    }

    try {
      const newPost = { title, content, author };
      const response = await axios.post(baseURL, newPost);
      setPosts([...posts, response.data]);
      clearForm();
      toast.success('Post created successfully!');
    } catch (error) {
      toast.error('Failed to create post: ' + error.message);
    }
  };

  // Update an existing post
  const handleUpdatePost = async () => {
    if (!title || !content || !author) {
      toast.error('Title, content, and author are required!');
      return;
    }

    try {
      const updatedPost = { title, content, author };
      const response = await axios.put(`${baseURL}/${editingPostId}`, updatedPost);
      setPosts(posts.map(post => (post._id === editingPostId ? response.data : post)));
      clearForm();
      toast.success('Post updated successfully!');
    } catch (error) {
      toast.error('Failed to update post: ' + error.message);
    }
  };

  // Delete a post
  const handleDeletePost = async (id) => {
    try {
      await axios.delete(`${baseURL}/${id}`);
      setPosts(posts.filter(post => post._id !== id));
      toast.success('Post deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete post: ' + error.message);
    }
  };

  // Clear the form
  const clearForm = () => {
    setTitle('');
    setContent('');
    setAuthor('');
    setEditingPostId(null);
  };

  // Start editing a post
  const startEditing = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setAuthor(post.author);
    setEditingPostId(post._id);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">Post Management</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
          rows="4"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        {editingPostId ? (
          <button onClick={handleUpdatePost} className="bg-blue-500 text-white p-2 rounded mr-2">Update Post</button>
        ) : (
          <button onClick={handleCreatePost} className="bg-green-500 text-white p-2 rounded mr-2">Create Post</button>
        )}
        <button onClick={clearForm} className="bg-gray-300 p-2 rounded">Clear</button>
      </div>

      <h2 className="text-xl font-semibold mb-2">Posts</h2>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post._id} className="border-b border-gray-300 pb-2 mb-2">
            <h3 className="text-lg font-bold">{post.title}</h3>
            <p>{post.content}</p>
            <p className="text-gray-500"><em>by {post.author}</em></p>
            <div className="mt-2">
              <button onClick={() => startEditing(post)} className="bg-yellow-500 text-white p-1 rounded mr-2">Edit</button>
              <button onClick={() => handleDeletePost(post._id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default Post;
