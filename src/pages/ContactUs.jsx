import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import styled from 'styled-components';

// Styled Container component using styled-components
const Container = styled.div`
  min-height: 70vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  margin-top:30px;
  ${'' /* border:4px solid black; */}
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 450px; /* Limit maximum width to 400px */
  height: 100%;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1); /* Box shadow effect */
  transition: transform 0.3s ease-out;
  &:hover {
    transform: scale(1.01); /* Hover zoom effect */
  }
  ${'' /* border:4px solid black; */}
  margin-bottom:15px;
  `
;

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
  width: 90%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #f5f5f5;
  box-shadow: inset 0 0 6px rgba(0,0,0,0.1); /* Inner shadow effect */
  outline: none;
  transition: background-color 0.3s, box-shadow 0.3s;
  &:focus {
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,123,255,0.6); /* Updated focus style */
  }
`;

const TextArea = styled.textarea`
  width: 90%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #f5f5f5;
  box-shadow: inset 0 0 6px rgba(0,0,0,0.1); /* Inner shadow effect */
  outline: none;
  transition: background-color 0.3s, box-shadow 0.3s;
  &:focus {
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,123,255,0.6); /* Updated focus style */
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

const ContactUs = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'service_t2xjx47', // Replace with your EmailJS service ID
        'template_q1fu9x8', // Replace with your EmailJS template ID
        form.current,
        'iVwfiO8oQ-HiJ2X6e' // Replace with your EmailJS user ID (public key)
      );

      if (result.status === 200) {
        toast.success('Email sent successfully!', {
          style: {
            background:
              'linear-gradient(90deg, rgba(74,222,128,1) 0%, rgba(52,211,153,1) 100%)',
            color: '#fff',
          },
        });
        form.current.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(`Failed to send email: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />
      <FormContainer>
        <Title>Contact Us</Title>
        <Form ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name">Name</label>
          <InputField
            type="text"
            id="user_name"
            name="user_name"
            required
            disabled={isSubmitting}
            placeholder="Enter your name"
          />

          <label htmlFor="user_email">Email</label>
          <InputField
            type="email"
            id="user_email"
            name="user_email"
            required
            disabled={isSubmitting}
            placeholder="Enter your email"
          />

          <label htmlFor="message">Message</label>
          <TextArea
            id="message"
            name="message"
            required
            rows="4"
            disabled={isSubmitting}
            placeholder="Type your message here"
          ></TextArea>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default ContactUs;
