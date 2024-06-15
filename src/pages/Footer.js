import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link as LinkR } from 'react-router-dom';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Import icons from react-icons/fa
import LogoImg from '../utils/Images/Logo1.png';

// Styled component for the logo link
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

// Styled component for the footer container
const FooterContainer = styled(Box)`
  background-color: #333;
  color: white;
  padding: 40px 0;
`;

// Styled component for the headings
const Heading = styled(Typography)`
  font-family: 'Times New Roman', Times, serif;
  color: #fff;
`;

// Styled component for the links list
const LinksList = styled('ul')`
  list-style-type: none;
  padding: 0;
`;

// Styled component for the list items
const ListItem = styled('li')`
  font-family: 'Times New Roman', Times, serif;
  color: #ccc;
`;

// Styled component for the icon and text row
const IconRow = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;
`;

// Styled component for the icon
const Icon = styled('span')`
  color: #ccc;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          {/* Left column for logo */}
          <Grid item xs={12} sm={4} textAlign="center">
            <NavLogo to="/">
              <img src={LogoImg} alt="Vidhyalaya" style={{ height: 50 }} />
              Vidhyalaya
            </NavLogo>
          </Grid>

          {/* Middle column for colleges links */}
          <Grid item xs={12} sm={4}>
            <Heading variant="h6" align="center">Colleges Links</Heading>
            <LinksList>
              <ListItem>Radiant Secondary School</ListItem>
              <ListItem>Little Buddha Academy</ListItem>
              <ListItem>Sarc Education Foundation</ListItem>
            </LinksList>
          </Grid>

          {/* Right column for project details */}
          <Grid item xs={12} sm={4}>
            <Grid container direction="column" spacing={1}>
              {/* First row */}
              <Grid item>
                <IconRow>
                  <Icon><FaEnvelope /></Icon>
                  <Typography variant="body2">pradipbhatt10@gmail.com</Typography>
                </IconRow>
              </Grid>
              {/* Second row */}
              <Grid item>
                <IconRow>
                  <Icon><FaPhone /></Icon>
                  <Typography variant="body2">9810*****</Typography>
                </IconRow>
              </Grid>
              {/* Third row */}
              <Grid item>
                <IconRow>
                  <Icon><img src={LogoImg} alt="Logo" style={{ height: 20 }} /></Icon>
                  <Typography variant="body2">Third Row Content</Typography>
                </IconRow>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
