import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import SchoolList from "../components/SchoolList";
import BlogForm from "../components/BlogForm";
import Testimonials from "../components/Testimonials";   

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
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
    <Container>
      <Wrapper>
        <Banner/>
        <SchoolList/>
       <Testimonials/>
        <BlogForm/>
        <Footer/>
      </Wrapper>
    </Container>
  );
};

export default Home;
