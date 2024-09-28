import React from "react";
import Navbar from "../components/Navbar"; // Import Navbar component
import Banner from "../components/Banner";
// import Footer from "../components/Footer";
import BlogForm from "../components/BlogForm";
import Testimonials from "../components/Testimonials";
import SchoolList from "../components/SchoolList";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen sm:p-0 sm:m-0">
      <div className="flex flex-col items-center flex-grow py-5 px-8 md:px-4 overflow-y-auto ">
        <div className="flex flex-col w-full max-w-5xl gap-8 md:gap-6">
          <Banner />
          <Testimonials />
          {/* <BlogForm /> */}
          <SchoolList />
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
