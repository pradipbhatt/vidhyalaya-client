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
import Entrance from "./pages/Entrance";



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
              <Route path="/blogs" exact element={<Blogs />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/compare" exact element={<Compare />} />
              <Route path="/blogs" exact element={<Blogs />} />
              <Route path="/chat" exact element={<Chat />} />
              <Route path="/profile" exact element={<Profile />} />
              <Route path="/entrance" exact element={<Entrance />} />
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
