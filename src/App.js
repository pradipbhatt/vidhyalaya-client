import React from "react";
import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Compare from "./pages/Compare";
import Blogs from "./pages/Blogs";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Testimonials from "./components/Testimonials"
import ContactUs from "./pages/ContactUs";
import SchoolList from './components/SchoolList';
import Lba from './components/schools/Lba';
import RadiantSchool from './components/schools/RadiantSchool';
import Shadharan from './components/schools/Shadharan';
import MorningGlorySchool from './components/schools/MorningGlorySchool';
import BlogForm from './components/BlogForm';
import Admin from './components/Admin';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {currentUser ? (
          <Container>
            <Navbar currentUser={currentUser} />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/admin" exact element={<Admin />} />
              <Route path="/blogs" exact element={<Blogs />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/compare" exact element={<Compare />} />
              <Route path="/testimonials" exact element={<Testimonials />} />
              <Route path="/chat" exact element={<Chat />} />
              <Route path="/profile" exact element={<Profile />} />
              {/* <Route path="/entrance" exact element={<Entrance />} /> */}
              <Route path="/contactus" exact element={<ContactUs />} />
              <Route path="/schools" exact element={<SchoolList />} />
              {/* <Route path="/schoolspage" exact element={<Schoolspage />} /> */}
              <Route path="/schools/2" exact element={<Lba />} />
              <Route path="/schools/1" exact element={<RadiantSchool />} />
              <Route path="/schools/3" exact element={<MorningGlorySchool/>} />
              <Route path="/schools/4" exact element={<Shadharan/>} />
              <Route path="/blogform" exact element={<BlogForm />} />
            </Routes>
          </Container>
        ) : (
          <Container>
            <Authentication />
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
