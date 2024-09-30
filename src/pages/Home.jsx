import React from "react";
import Navbar from "../components/Navbar"; // Import Navbar component
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import BlogForm from "../components/BlogForm";
import Testimonials from "../components/Testimonials";
import SchoolList from "../components/SchoolList";
import Chat from "./Chat";

const Home = () => {
  return (
    <div className="flex flex-col  overflow-hidden">
      <div className="flex flex-col items-center flex-grow py-0 mt-4 overflow-y-auto">
        <div className="flex flex-col w-full  gap-8 md:gap-6 ">
          <Banner />
          <Testimonials />
          {/* <BlogForm /> */}
          <SchoolList />
          <Chat/>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
