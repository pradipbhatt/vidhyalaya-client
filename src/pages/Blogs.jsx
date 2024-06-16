import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  overflow-y: auto; /* Enable vertical scrolling */
  height: 100vh; /* Use viewport height */
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start; /* Align posts to the top */
  width: 90%;
  max-width: 1200px;
  margin-top: 0px;
  overflow-x: hidden;
`;

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 25px;
  width: 100%;
  transition: transform 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #003322;

  &:hover {
    padding: 30px;
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
  overflow: hidden;
  max-height: ${({ expanded }) => (expanded ? 'none' : '4.8em')}; /* roughly 3 lines */
  text-overflow: ellipsis;
  white-space: pre-wrap; /* Preserves newlines and spaces */
  color: #003322;
`;

const Author = styled.p`
  font-size: 0.9rem;
  color: #003322;
  margin-top: 10px;
`;

const ReadMoreButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  align-self: flex-start;

  &:hover {
    background-color: #0056b3;
  }
`;

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
  });
  const [expandedPostIds, setExpandedPostIds] = useState([]);

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

  const toggleReadMore = (postId) => {
    setExpandedPostIds((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
  };

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />
      <PostsContainer>
        {posts.map((post) => (
          <Card key={post._id}>
            <Title>{post.title}</Title>
            <Content expanded={expandedPostIds.includes(post._id)}>
              {post.content}
            </Content>
            <Author>Author: {post.author}</Author>
            <ReadMoreButton onClick={() => toggleReadMore(post._id)}>
              {expandedPostIds.includes(post._id) ? 'Read Less' : 'Read More'}
            </ReadMoreButton>
          </Card>
        ))}
      </PostsContainer>
    </Container>
  );
};

export default Blogs;
