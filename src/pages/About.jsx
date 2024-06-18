import React from 'react';
import Footer from '../components/Footer';
import ContactUs from '../pages/ContactUs'; // Import ContactUs component

const developers = [
  {
    name: 'Frontend Developer',
    title: 'Frontend Developer',
    description: 'Responsible for the design and implementation of the user interface.',
    img: 'https://scontent.fdhi1-1.fna.fbcdn.net/v/t39.30808-6/418234810_321123314253880_5025485568730399203_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VfxFjZxdDk4Q7kNvgFgZJ72&_nc_ht=scontent.fdhi1-1.fna&oh=00_AYDLdiPRxRa6NlIVtYiBLE7Dvupo-9VXqmb2MB2npSrj0g&oe=66744E0B'
  },
  {
    name: 'Backend & Database Expert',
    title: 'Backend & Database Expert',
    description: 'Handles server-side logic and database management.',
    img: 'https://pradipbhatt.com.np/medias/parry.jpg'
  },
  {
    name: 'QA Engineer',
    title: 'Quality Assurance Engineer',
    description: 'Ensures the quality of the application through testing.',
    img: 'https://avatars.githubusercontent.com/u/108856386?v=4?s=400'
  },
  {
    name: 'Data Analyst',
    title: 'Data Analyst',
    description: 'Analyzes data to provide insights and reports.',
    img: 'https://www.shutterstock.com/shutterstock/photos/445990711/display_1500/stock-vector-sketch-of-school-girl-and-backpack-on-ground-hand-drawn-illustration-445990711.jpg'
  },
  {
    name: 'Tester',
    title: 'Tester',
    description: 'Performs testing to find and report bugs.',
    img: 'https://media.discordapp.net/attachments/1235613268882624553/1240232380485206056/IMG-20240307-WA0006.jpg?ex=666f5729&is=666e05a9&hm=2478f2a954b86c30b78d6a4905469de68027151f1c3bb1daac32db2794e67bc8&=&format=webp&width=186&height=468'
  }
];

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 overflow-y-auto mt-10 font-serif">
        <div className="container mx-auto text-left px-6 sm:px-20"> {/* Added sm:px-20 for larger screens */}
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="https://www.pngall.com/wp-content/uploads/8/Student-PNG-Clipart.png" alt="Team Image" className="mx-auto w-32 md:w-48 rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-teal-500 mt-8 md:mt-0">About Our Team and Project</h2>
              <p className="text-base lg:text-lg text-gray-800 mt-4">
                We are Team Vidhyalaya from Far Western University. This project is our minor project, where we compare two schools and show their relative data to the users. Additionally, we include all the relevant resources required for students when planning their undergraduate career.
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-teal-500">Objectives</h2>
              <ul className="list-disc list-inside text-base lg:text-lg text-gray-800 mt-4">
                <li>Compare the colleges.</li>
                <li>Provide relevant resources for students.</li>
                <li>Help students plan their undergraduate career.</li>
              </ul>
            </div>
            <div>
              <img src="https://www.pngall.com/wp-content/uploads/8/University-Student-PNG-Free-Image.png" alt="Objectives Image" className="mx-auto w-32 md:w-48 rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Third Row - Developers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {developers.map((developer, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                <img src={developer.img} alt={developer.name} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-lg lg:text-xl font-bold text-teal-500">{developer.name}</h3>
                  <p className="text-base lg:text-md text-gray-800 mt-2">{developer.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Us Section */}
          <ContactUs />
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default About;
