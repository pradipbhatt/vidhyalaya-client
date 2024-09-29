import React from "react";
import Footer from "../Footer";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RadiantSchool = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      <div className="flex flex-col items-center w-full mt-14 px-4 md:px-12 bg-gradient-to-r from-[rgba(4,81,97,0.5)] via-[rgba(4,81,97,0.3)] to-[rgba(4,81,97,0)]">
        <Slider {...settings} className="w-full">
          {[
            "https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/RHSSBKN.jpg/640px-RHSSBKN.jpg&w=640&q=50",
            "https://i.pinimg.com/originals/03/2f/62/032f62abd9ae48dcf14d10d2b9909c81.jpg",
            "https://theedunepal.ap-south-1.linodeobjects.com/uploads/clients/radiantsecondaryschool/banner/94866107_104168927947814_936785904024944640_o.jpg"
          ].map((src, index) => (
            <div key={index} className="relative w-full h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={src}
                alt="Radiant Secondary School"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
          ))}
        </Slider>

        <div className="w-full p-4 mt-8  rounded shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
          <h3 className="text-xl font-serif text-blue-700">Radiant Secondary School</h3>
          <p className="mt-2 text-gray-700">
            Radiant Secondary School is a secondary school located in the area of Katan, Bhimdatta / Mahendranagar, Mahakali, Kanchanpur District of Nepal. It lies in Mahakali Zone of Nepal. It lies in the Far-Western Development Region, Nepal. It is an educational institute that offers Basic Level and Secondary Level education to the students. Every year about 1300 students attend entrance exams to study in this school, but only about 50% i.e. about 600 students only qualify. It offers intermediate education on science and management streams. It allows students to study other subjects in Grade XII as non-credit subjects.
          </p>
        </div>

        <div className="w-full p-4 my-4  rounded shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
          <h3 className="text-xl font-serif text-blue-700">Admissions Information:</h3>
          <p className="mt-2 text-gray-700">
            Registered candidates have to appear in entrance test conducted by the school management. The format of entrance test will be shown as.
            Science Stream:
            <br />- Comp. Math 30
            <br />- English 25
            <br />- Science 40
            <br />- Interview 20
            <br />
            Management Stream:
            <br />- Comp. Math 40
            <br />- English 40
            <br />- Interview 20
          </p>
        </div>

        <div className="w-full p-4 my-4  rounded shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
          <h3 className="text-xl font-serif text-blue-700">Academic Programs:</h3>
          <p className="mt-2 text-gray-700">
            Radiant Secondary School (RSS) in Mahendranagar, Nepal offers Ten Plus Two (10+2) programs in Science and Management. The school also offers a variety of scholarships for deserving and marginalized students.
          </p>
        </div>

        <div className="w-full p-4 my-4  rounded shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
          <h3 className="text-xl font-serif text-blue-700">Extracurricular Activities:</h3>
          <p className="mt-2 text-gray-700">
            Radiant attempts to impart not only bookish knowledge but also offers several extra-curricular activities like football, volleyball, cricket, basketball, table tennis, badminton, athletics, quiz contest, debate competition, essay, chess, for-all round physical and mental fitness of the students. Thus, Radiant has been providing such opportunities to the students by conducting intra school extra-curricular programs and participating them in different inter school extra-curricular competitions.
          </p>
        </div>

        <div className="w-full p-4 my-4  rounded shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
          <h3 className="text-xl font-serif text-blue-700">Student Support Services:</h3>
          <p className="mt-2 text-gray-700">
            The administration and faculty members closely monitor the overall academic progress, personality development and behavioral aspects of the students to provide necessary encouragement and suggestions to make them excel in their objectives. Teaching here is totally student-centered and activities like group exercises and discussions, regular assignments and examination, progress analysis and problem identification, regular project works, counseling for improvement, extra tutorial classes and identification of practical applications of achieved knowledge creates an astonishing environment at Radiant for the students to flourish and blossom.
          </p>
        </div>

        <div className="w-full p-4 my-4  rounded shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
          <h3 className="text-xl font-serif text-blue-700">Facilities and Resources:</h3>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>Highly qualified, dedicated and experienced faculty members</li>
            <li>A well-set library, study center with textbooks, magazines and newspapers</li>
            <li>Well-equipped and properly maintained laboratories</li>
          </ul>
        </div>

        <div className="w-full p-4 my-4  rounded shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
          <h3 className="text-xl font-serif text-blue-700">Contact Details:</h3>
          <p className="mt-2 text-gray-700">
            Science Campus Road, Bhimdut Municipality-18, Mahendranagar, Kanchanpur, Sudurpaschim Province, Nepal
            <br />
            Email: radianths.edu.np@gmail.com
            <br />
            Phone: +977-99-525169
          </p>
          <iframe
            className="w-full h-72 mt-2"
            loading="lazy"
            allowFullScreen
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d550442.525747399!2d79.57737990332356!3d28.794369129251955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1ac0461e0542b%3A0x8a980f34da804f5!2z4KSw4KWH4KSh4KS_4KSv4KSo4KWN4KSfIOCkruCkvuCkp-CljeCkr-CkruCkv-CklSDgpLXgpL_gpKbgpY3gpK_gpL7gpLLgpK8!5e0!3m2!1sne!2snp!4v1718483374134!5m2!1sne!2snp"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RadiantSchool;
