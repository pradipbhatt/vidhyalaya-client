import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import toast, { Toaster } from 'react-hot-toast';

const Container = styled.div`
  min-height: 85vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  margin-top: 30px;
`;

const FormContainer = styled.div`
  width: 90%;
  max-width: 450px;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-out;
  &:hover {
    transform: scale(1.01);
  }
  margin-bottom: 15px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #f5f5f5;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: background-color 0.3s, box-shadow 0.3s;
  &:focus {
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.6);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #f5f5f5;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: background-color 0.3s, box-shadow 0.3s;
  resize: vertical;
  white-space: pre-wrap; /* Preserves newlines */
  &:focus {
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.6);
  }
`;


const Button = styled.button`
  width: 100%;
  padding: 12px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

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
      const response = await axios.post('https://vidhyalaya-backend.onrender.com/api/post', formData);
      if (response.status === 201) {
        toast.success('Post created successfully!', {
          style: {
            background:
              'linear-gradient(90deg, rgba(74,222,128,1) 0%, rgba(52,211,153,1) 100%)',
            color: '#fff',
          },
        });
        setFormData({
          title: '',
          content: '',
          author: '',
        });
        if (fetchPosts) {
          fetchPosts(); // Refresh the posts after creating a new post
        }
      } else {
        throw new Error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error.message);
      toast.error(`Failed to create post: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />
      <FormContainer>
        <Title>Create a New Blog</Title>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <InputField
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            placeholder="Enter the title"
          />

          <label htmlFor="content">Content</label>
          <TextArea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows="4"
            disabled={isSubmitting}
            placeholder="Enter the content"
          ></TextArea>

          <label htmlFor="author">Author</label>
          <InputField
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            placeholder="Enter the author's name"
          />

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Creating...' : 'Create Post'}
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default BlogForm;
