import React from 'react';
import Testimo from '../data/Testimo'


const Testimonials = () => {

  return (
    <>
      <div className="">
        <div className=" flex items-center justify-center mb-10 flex-wrap min-w-60 gap-10 lg:gap-0 mt-20 "> 
          {Testimo.map((testimonial, index) => (
            <div key={index} className="font-sans max-w-[410px] h-auto p-6 rounded-lg mx-auto shadow-[0_6px_18px_-6px_rgba(193,195,248)]  relative">
              <img src={testimonial.img} className="w-16 h-16 rounded-full absolute right-0 left-0 mx-auto -top-7" alt={testimonial.name} />
              <div className="mt-6 text-center">
                <div>
                  <h4 className="text-md font-extrabold text-[#00274D]">{testimonial.name}</h4>
                  <p className="text-sm text-[#00274D] mt-0.5">{testimonial.title} | {testimonial.company}</p>
                </div>
                <div className="mt-4">
                  <h2 className="text-lg font-extrabold text-[#00274D] mb-2">{testimonial.quoteTitle}</h2>
                  <p className="text-md text-gray-800 leading-relaxed">{testimonial.quote}</p>
                </div>
                <div className="flex justify-center space-x-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <svg key={starIndex} className="w-5 fill-[#00274D]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>     
      
    </>
  );
};

export default Testimonials;