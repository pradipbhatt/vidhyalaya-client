import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Kishan Bhatt',
      title: 'Dean',
      company: 'Far Western University',
      img: 'https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/394035966_10160917867991480_3318039607176965184_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WXkEPJAX1FUQ7kNvgFIy1he&_nc_ht=scontent.fktm1-1.fna&oh=00_AYBm197lcfgv3CIlxVSzPs_uHKg4EAsk60wpsAXLazVO0A&oe=66789803',
      quoteTitle: 'Inspiring Leadership',
      quote: 'Our project Vidhyalaya is a testament to our commitment to excellence and innovation in education.',
      rating: 5
    },
    {
      name: 'HRK',
      title: 'Head of Department',
      company: 'Far Western University',
      img: 'https://scontent.fktm1-1.fna.fbcdn.net/v/t1.6435-9/165774678_3842273712535120_5532216151641677450_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0_4jRJbWXFQQ7kNvgGWfYn2&_nc_ht=scontent.fktm1-1.fna&oh=00_AYC1n23PjxYtMpHYLP9Le4OR0N7iYVHQbP5eCOoxKeGGjw&oe=669A165B',
      quoteTitle: 'Pioneering Education',
      quote: 'Vidhyalaya brings a new perspective to comparing educational institutions and providing essential resources.',
      rating: 4
    },
    {
      name: 'Rishi Kumar Marseni',
      title: 'Team Advisor',
      company: 'Far Western University',
      img: 'https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/275320881_5097818906903803_1471185847402786064_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6Z7LpVaEKT8Q7kNvgHQZd6Q&_nc_ht=scontent.fktm1-1.fna&oh=00_AYDFsqpXVpqHR4USdNJaOXvQjyJahYqcceOGMKX85o5DtA&oe=66787DBE',
      quoteTitle: 'Guidance and Support',
      quote: 'The guidance and support for the Vidhyalaya project have been crucial in its success.',
      rating: 5
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-20">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="font-sans max-w-[410px] h-auto p-6 rounded-lg mx-auto shadow-[0_6px_18px_-6px_rgba(193,195,248)] bg-white relative">
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
