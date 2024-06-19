import React from "react";
import styled from "styled-components";
// import Footer from "../components/Footer";
import PostSchoolForm from "../components/PostSchoolForm";
import PostSchool from "../components/PostSchool"; 
// import SchoolDashboard from "../components/SchoolDashboard.jsx";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 10px;
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

const Admin = () => {

  return (
    <Container>
      <Wrapper>
        {/* <Banner/> */}
        {/* <SchoolList/> */}
       {/* <Testimonials/> */}
        <PostSchoolForm/>
        <PostSchool/>
        {/* <SchoolDashboard/> */}
        {/* <Footer/> */}
      </Wrapper>
    </Container>
  );
};

export default Admin;
