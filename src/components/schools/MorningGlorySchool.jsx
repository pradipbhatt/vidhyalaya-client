import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "../../pages/Footer";

const Container = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing(2)};
  overflow-x: hidden;
  width: 80%;
  margin: auto;
  
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Heading = styled(Typography)`
  color: blue;
  font-family: "Times New Roman", Times, serif;
`;

const SliderImage = styled('div')`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
`;

const StyledPaper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(2)};
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transform: translateY(-4px);
  }
`;

const MorningGlorySchool = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Container sx={{ marginTop: 4 }}>
        <Slider {...settings}>
          <SliderImage>
            <img src="https://www.collegenp.com/uploads/2018/10/Morning-Glory-Secondary-School-11.jpg" alt="Slider Image 1" />
          </SliderImage>
          <SliderImage>
            <img src="https://www.collegenp.com/uploads/2018/10/Morning-Glory-Secondary-School-7.jpg" alt="Slider Image 2" />
          </SliderImage>
          <SliderImage>
            <img src="https://www.collegenp.com/uploads/2018/10/Morning-Glory-Secondary-School-1.jpg" alt="Slider Image 3" />
          </SliderImage>
        </Slider>
        <StyledPaper sx={{ margin: 2 }} elevation={2}>
          <Heading variant="h6" component="h3">
            Morning Glory Secondary School, Mahendranagar, Kanchanpur
          </Heading>
          <Typography variant="body1" color="textSecondary" component="p">
            Morning Glory Secondary School, established in 2005 AD (2062 BS), is a privately owned academic institution located in Janaki Tole, Mahendranagar, Kanchanpur, Sudurpaschim Province of Nepal. Affiliated with the National Examinations Board (NEB) and approved by the Ministry of Education, Nepal, the school offers Ten Plus Two (10+2) programs in Management and Science.
          </Typography>
        </StyledPaper>

        <StyledPaper sx={{ margin: 2 }} elevation={3}>
          <Heading variant="h6" component="h3">
            Courses Offered
          </Heading>
          <Typography variant="body1" color="textSecondary" component="p">
            Morning Glory Secondary School provides Ten Plus Two (10+2) programs in:
            <ul>
              <li>Management</li>
              <li>Science</li>
            </ul>
            The school offers moderate fee structures and various scholarship schemes for deserving students.
          </Typography>
        </StyledPaper>

        <StyledPaper sx={{ margin: 2 }} elevation={3}>
          <Heading variant="h6" component="h3">
            Facilities
          </Heading>
          <List sx={{ backgroundColor: "background.paper" }}>
            <ListItem>
              <ListItemText primary="Library" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Sports facilities" />
            </ListItem>
            <ListItem>
              <ListItemText primary="WiFi-enabled campus" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Auditorium" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Science labs" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Medical facilities" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Counselling services" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Conference facilities" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Multimedia resources" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Online journal" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Educational tours" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Scholarships" />
            </ListItem>
          </List>
        </StyledPaper>

        <StyledPaper sx={{ margin: 2 }} elevation={3}>
          <Heading variant="h6" component="h3">
            Contact Details
          </Heading>
          <Typography variant="body1" color="textSecondary" component="p">
            Address: Janaki Tole, Mahendranagar, Kanchanpur, Sudurpaschim Province, Nepal
            <br />
            Email: morningglorymnr@gmail.com
            <br />
            Website: <a href="http://morningglory.edu.np" target="_blank" rel="noopener noreferrer">morningglory.edu.np</a>
            <br />
            Phone: +977-99-520666, +977-99-524772
          </Typography>
        </StyledPaper>

        <Footer />
      </Container>
    </>
  );
};

export default MorningGlorySchool;
