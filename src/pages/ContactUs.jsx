import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

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
  <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg mt-20">
        <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label htmlFor="from_name" className="block mb-2">Your Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              disabled={isSubmitting}
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="user_email" className="block mb-2">Your Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              disabled={isSubmitting}
              placeholder="Enter your Valid email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              disabled={isSubmitting}
              placeholder="Type your message here"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 bg-blue-500 text-white rounded-lg focus:outline-none ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  </>
  );
};

export default ContactUs;
