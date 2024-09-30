import React from 'react';
import Footer from '../components/Footer';
import ContactUs from '../pages/ContactUs'; // Import ContactUs component

const developers = [
  {
    name: 'Santosh Upadhyay',
    role: 'Frontend Developer',
    img: 'https://avatars.githubusercontent.com/u/101114463?v=4'
  },
  {
    name: 'Pradip Bhatt',
    role: 'Backend & Database Expert',
    img: 'https://pradipbhatt.com.np/medias/parry.jpg'
  },
  {
    name: 'Santoshi Ayer',
    role: 'Documentation',
    img: 'https://avatars.githubusercontent.com/u/108856386?v=4?s=400'
  },
  {
    name: 'Yashoda Badu',
    role: 'Team Manager',
    img: 'https://www.shutterstock.com/shutterstock/photos/445990711/display_1500/stock-vector-sketch-of-school-girl-and-backpack-on-ground-hand-drawn-illustration-445990711.jpg'
  },
  {
    name: 'Hema Dhami',
    role: 'Designer',
    img:''
  },
  {
    name: 'Er. Rishi K Marseni',
    role: 'Mentor',
    img: 'https://avatars.githubusercontent.com/u/138676641?v=4'
  }
];
const About = () => {
  return (
    <>
    <div className="bg-white via-[rgba(4,81,97,0.3)] to-[rgba(4,81,97,0)]  py-0 pt-10 overflow-y-auto mt-10 font-serif">
      <div className="container mx-auto text-left px-6 sm:px-20"> {/* Added sm:px-20 for larger screens */}
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-101 hover:shadow-2xl">
            <img src="https://clipart-library.com/images_k/teamwork-transparent-background/teamwork-transparent-background-24.png" alt="Team Image" className="w-full h-58 object-cover rounded-t-lg" />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00274D] mt-8 md:mt-0">About Our Team and Project</h2>
            <p className="text-base lg:text-lg text-gray-800 mt-4">
              We are Team Vidhyalaya from Far Western University. This project is our minor project, where we compare two schools and show their relative data to the users. Additionally, we include all the relevant resources required for students when planning their undergraduate career.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00274D]">Objectives</h2>
            <ul className="list-disc list-inside text-base lg:text-lg text-gray-800 mt-4">
              <li>Compare the colleges.</li>
              <li>Provide relevant resources for students.</li>
              <li>Help students plan their undergraduate career.</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-101 hover:shadow-2xl">
            <img src="https://static.vecteezy.com/system/resources/previews/020/962/986/original/software-engineer-graphic-clipart-design-free-png.png" alt="Objectives Image" className="w-full h-68 object-cover rounded-t-lg" />
          </div>
        </div>

        {/* Third Row - Developers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-10 ">
          {developers.map((developer, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-102 hover:shadow-2xl">
              <img src={developer.img} alt={developer.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-lg lg:text-xl font-bold text-teal-500">{developer.name}</h3>
                <p className="text-base lg:text-md text-gray-800 mt-2">{developer.description}</p>
              </div>
            </div>
          ))}
        </div>

        
        {/* Footer */}
      </div>
        <Footer />
    </div>
  </>
  );
};

export default About;
