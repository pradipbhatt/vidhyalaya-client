import React from 'react';
import hrk from '../components/medias/hrk.jpg';
import rishi from './medias/rishi.jpeg';
import kishan from './medias/kishan.jpeg';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Kishan Bhatt',
      title: 'Dean',
      company: 'Far Western University',
      img:kishan,
      quoteTitle: 'Inspiring Leadership',
      quote: 'Our project Vidhyalaya is a testament to our commitment to excellence and innovation in education.',
      rating: 5
    },
    {
      name: 'Harendra Raj Kalauni',
      title: 'Head of Department',
      company: 'Far Western University',
      img: hrk,
      quoteTitle: 'Pioneering Education',
      quote: 'Vidhyalaya brings a new perspective to comparing educational institutions and providing essential resources.',
      rating: 4
    },
    {
      name: 'Rishi K. Marseni',
      title: 'Team Advisor',
      company: 'Far Western University',
      img: rishi,
      quoteTitle: 'Guidance and Support',
      quote: 'The guidance and support for the Vidhyalaya project have been crucial in its success.',
      rating: 5
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-20 ">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="font-sans max-w-[410px] h-auto p-6 rounded-lg mx-auto shadow-[0_6px_18px_-6px_rgba(193,195,248)] bg-gradient-to-r from-[rgba(4,81,97,0.5)] via-[rgba(4,81,97,0.3)] to-[rgba(4,81,97,0)] relative">
          <img src={testimonial.img} className="w-16 h-16 rounded-full absolute right-0 left-0 mx-auto -top-7" alt={testimonial.name} />
          <div className="mt-6 text-center">
            <div>
              <h4 className="text-sm font-extrabold text-gray-800">{testimonial.name}</h4>
              <p className="text-xs text-gray-500 mt-0.5">{testimonial.title} | {testimonial.company}</p>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-extrabold text-gray-800 mb-2">{testimonial.quoteTitle}</h2>
              <p className="text-sm text-gray-800 leading-relaxed">{testimonial.quote}</p>
            </div>
            <div className="flex justify-center space-x-1 mt-4">
              {[...Array(testimonial.rating)].map((_, starIndex) => (
                <svg key={starIndex} className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              ))}
              {[...Array(5 - testimonial.rating)].map((_, starIndex) => (
                <svg key={starIndex} className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
