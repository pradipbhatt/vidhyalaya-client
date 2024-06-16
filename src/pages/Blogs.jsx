import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  overflow-y: auto;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  width: 800px;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const Author = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-top: 10px;
`;


const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
  });

  useEffect(() => {
    fetchPosts();
  }, []);

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
    try {
      await axios.post('https://vidhyalaya-backend.onrender.com/api/post', formData);
      toast.success('Post created successfully!');
      setFormData({ title: '', content: '', author: '' });
      fetchPosts();
    } catch (error) {
      console.error('Error submitting form:', error.message);
      toast.error(`Failed to submit form: ${error.message}`);
    }
  };

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />
      <PostsContainer>
        {posts.map(post => (
          <Card key={post._id}>
            <Title>{post.title}</Title>
            <Content>{post.content}</Content>
            <Author>Author: {post.author}</Author>
          </Card>
        ))}
      </PostsContainer>
    </Container>
  );
};

export default Blogs;
