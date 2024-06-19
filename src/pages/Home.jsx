import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import BlogForm from "../components/BlogForm";
import Testimonials from "../components/Testimonials";   
import SchoolList from "../components/SchoolList";  
import Navbar from "../components/Navbar";  // Import Navbar component

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px 100px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Home = () => {
  return (
    <>
      <Navbar />  {/* Include Navbar outside of the Wrapper */}
      <Container>
        <Wrapper>
          <Banner />
          <SchoolList />
          <Testimonials />
          <BlogForm />
          <Footer />
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
