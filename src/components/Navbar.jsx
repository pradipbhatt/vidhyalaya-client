import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LogoImg from '../utils/Images/Logo1.png';
import { Link as LinkR, NavLink } from 'react-router-dom';
import { MenuRounded } from '@mui/icons-material';
import { Avatar, Menu, MenuItem, Typography, Switch, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout, fetchUserData } from '../redux/reducers/userSlice';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
  border-bottom: 1px solid ${({ theme }) => theme.text_secondary + 20};
`;

const NavContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavLogo = styled(LinkR)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 6px;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  height: 52px;
`;

const MobileIcon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navlink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 1s slide-in;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
`;

const UserContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  align-items: center;
  padding: 0 6px;
  color: ${({ theme }) => theme.primary};
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.bg};
  position: absolute;
  top: 70px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px 20px;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bg_secondary};
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const ModeSwitch = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };

  const handleModeChange = () => {
    setDarkMode(!darkMode);
    console.log('Mode changed');
  };

  return (
    <Nav>
      <NavContainer>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded sx={{ color: 'inherit' }} />
        </MobileIcon>
        <NavLogo to="/">
          <Logo src={LogoImg} />
          Vidhyalaya
        </NavLogo>
        <MobileMenu isOpen={isOpen}>
          <Navlink to="/" onClick={() => setIsOpen(false)}>Home</Navlink>
          <Navlink to="/about" onClick={() => setIsOpen(false)}>About</Navlink>
          <Navlink to="/compare" onClick={() => setIsOpen(false)}>Compare</Navlink>
          <Navlink to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Navlink>
          <Navlink to="/chat" onClick={() => setIsOpen(false)}>Chat</Navlink>
        </MobileMenu>

        <NavItems>
          <Navlink to="/">Home</Navlink>
          <Navlink to="/about">About</Navlink>
          <Navlink to="/compare">Compare</Navlink>
          <Navlink to="/blogs">Blogs</Navlink>
          <Navlink to="/chat">Chat</Navlink>
        </NavItems>

        <UserContainer>
          <ModeSwitch onClick={handleModeChange}>
            <IconWrapper>
              {darkMode ? <RiMoonClearFill size={24} /> : <RiSunFill size={24} />}
            </IconWrapper>
            <Switch checked={darkMode} />
          </ModeSwitch>

          {currentUser ? (
            <>
              <Avatar onClick={handleClick}>{currentUser.name.charAt(0)}</Avatar>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
               <Box display="flex" flexDirection="column" alignItems="flex-end">
                <Typography variant="body1">{currentUser.name}</Typography>
                <Typography variant="body2">{currentUser.email}</Typography>
              </Box>
              <MenuItem component={Link} to="/profile" onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <StyledLink to="/login">Login</StyledLink>
              <StyledLink to="/signup">Sign Up</StyledLink>
            </>
          )}
        </UserContainer>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
