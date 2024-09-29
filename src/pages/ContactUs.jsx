import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS SDK
// import "@fontsource/roboto"; // Importing Roboto for form fields
import linkedin from "./linkedin .svg";
import location from "./location.svg";
import mail from "./mail.svg";
import phone from "./phone.svg";
import twitter from "./twitter.svg";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the email
    emailjs.send('service_rpl4n2n', 'template_z8orwi3', formData, 'gA2JhY7UkblAK_HIT')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSubmitted(true); // Set submitted state to true
      }, (error) => {
        console.error('Failed to send email. Error:', error);
      });
  };

  return (
    <div className="bg-gradient-to-r from-[rgba(4,81,97,0.5)] via-[rgba(4,81,97,0.3)] to-[rgba(4,81,97,0)] p-2 lg:p-12 md:p-8 sm:flex sm:justify-between">
      {/* Contact Info Section */}
      <div className="bg-transparent p-2 lg:p-12 md:p-8 sm:p-6 sm:w-full md:w-1/2 flex flex-col justify-between">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">CONTACT</h2>
        <p className="text-gray-900 mb-8 leading-relaxed">
          We believe in conversations. Whether you have a business proposition,
          a query, or simply wish to learn more about what we do, our doors
          (and inboxes) are always open. With a team of dedicated professionals
          ready to assist, your inquiries are always in expert hands.
        </p>
        <div className="space-y-4">
          <p className="text-gray-700 flex items-center mb-2">
            <img src={location} alt="Location Icon" className="w-8 h-8 mr-4" />
            Campus road, Mahendranagar
          </p>
          <p className="text-gray-700 flex items-center mb-2">
            <img src={mail} alt="Mail Icon" className="w-8 h-8 mr-4" />
            pradip10bhatt@gmail.com
          </p>
          <p className="text-gray-700 flex items-center mb-6">
            <img src={phone} alt="Phone Icon" className="w-8 h-8 mr-4" />
            +977 9810652734
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-1000 ease-in-out hover:bg-gradient-to-r hover:from-teal-800 hover:to-teal-400"
            >
              <img src={linkedin} alt="LinkedIn Icon" className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-1000 ease-in-out hover:bg-gradient-to-r hover:from-teal-800 hover:to-teal-400"
            >
              <img src={twitter} alt="Twitter Icon" className="w-12 h-12" />
            </a>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div
  className="bg-white bg-opacity-80 p-8 w-4/5 sm:p-6 md:p-8 lg:p-10 rounded-md shadow-xl w-full sm:w-full md:w-1/2 mt-10 sm:mt-0 sm:mx-4 mx-auto sm:shadow-lg"
  style={{ fontFamily: "Roboto, sans-serif" }}
>
  {submitted ? (
    <div className="text-center transition-opacity duration-500 ease-in-out">
      <div className="mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-teal-600 mx-auto"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.293-10.293a1 1 0 00-1.414 0L10 10.586l-1.879-1.88a1 1 0 00-1.414 1.414l2.293 2.293a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h3 className="text-2xl font-semibold mb-2 tracking-wider">Message Received Successfully!</h3>
      <p className="text-gray-700 mb-4 tracking-widest">Thanks for your message, we will get back to you as soon as possible.</p>
      <button
        onClick={() => setSubmitted(false)} // Reset form on button click
        className="p-2 w-full bg-teal-900 text-white font-bold rounded-md shadow-md transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-teal-800 hover:to-blue-200"
      >
        SEND ANOTHER MESSAGE ➔
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <h3 className="text-2xl font-semibold mb-6 text-gray-700">Let's Talk!</h3>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-black focus:ring-blue-500"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-black focus:ring-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-black focus:ring-blue-500"
          rows="4"
          placeholder="Type your message.."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-[#04516180] text-white font-bold rounded-md shadow-md transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-teal-800 hover:to-teal-400"
      >
        SEND MESSAGE
      </button>
    </form>
  )}
</div>


    </div>
  );
}