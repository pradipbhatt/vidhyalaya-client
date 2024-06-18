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
import Footer from "../Footer";

const Container = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing(2)}; /* Responsive padding */
  overflow-x: hidden;
  width: 80%;
  margin: auto; /* Center align content */
  
  @media (max-width: 600px) {
    width: 100%; /* Full width on mobile */
  }
`;

const Heading = styled(Typography)`
  color: blue;
  font-family: "Times New Roman", Times, serif;
`;

const SliderImage = styled('div')`
  position: relative;
  width: 100%;
  height: 300px; /* Reduced height for smaller screens */
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
    background: rgba(0, 0, 0, 0.2); /* Adjust the darkness here */
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

const Lba = () => {
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
            <img src="https://lbamnr.edu.np/images/future-lba.jpg" alt="Slider Image 1" />
          </SliderImage>
          <SliderImage>
            <img src="https://lbamnr.edu.np/images/lba%20plus2%20banner.jpg" alt="Slider Image 2" />
          </SliderImage>
          <SliderImage>
            <img src="https://lbamnr.edu.np/images/future-lba.jpg" alt="Slider Image 3" />
          </SliderImage>
        </Slider>
        <StyledPaper sx={{ margin: 2 }} elevation={2}>
          <Heading variant="h6" component="h3">
            Message From The Desk Of Principal
          </Heading>
          <Typography variant="body1" color="textSecondary" component="p">
            It is my pleasure to welcome you to Little Buddha Higher Secondary School. The school had a very humble beginning in 2063. We have a team of academicians with good expertise in running +2 in Science and Management. LBA has been set with a view to imparting quality education and providing congruous guidelines to the students aspiring for a dazzling career in the realm of their choice. The college aims at the production of top-class citizens.
            <br /><br />
            Definitely, I would love to assure that LBA's faculty members with their decades-long experience, infrastructure and the teaching-learning environment all together can bring difference which is imperative for academic success. The development of LBA has been possible due to qualified and experienced faculty members, well-disciplined and dedicated students and co-operative guardians.
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Read More
          </Typography>
        </StyledPaper>

        <StyledPaper sx={{ margin: 2 }} elevation={3}>
          <Heading variant="h6" component="h3">
            Our Goals
          </Heading>
          <List>
            <ListItem>
              <ListItemText primary="We are aware of the fact that by the time today's children graduates the world will have changed manifold." />
            </ListItem>
          </List>
          <Typography variant="body1" color="textSecondary" component="p">
            <strong>Goals Achieved:</strong>
            <ul>
              <li>105 Certified Teachers</li>
              <li>15000 Students Enrolled</li>
              <li>100% Passing to Universities</li>
              <li>100% Satisfied Parents</li>
            </ul>
          </Typography>
        </StyledPaper>

        <StyledPaper sx={{ margin: 2 }} elevation={3}>
          <Heading variant="h6" component="h3">
            News & Events
          </Heading>
          <List>
            <ListItem>
              <ListItemText primary="Latest News" />
            </ListItem>
            <ListItem>
              <ListItemText primary="01 Dec 2020 - School From Nursery To Class 12 Will Continue From 18th Mangsir 2077" />
            </ListItem>
            <ListItem>
              <ListItemText primary="23 Nov 2020 - Class 12 Final Examination Notice" />
            </ListItem>
          </List>
          <Typography variant="body1" color="textSecondary" component="p">
            <strong>Latest Events:</strong> View All Events
          </Typography>
        </StyledPaper>

        <StyledPaper sx={{ margin: 2 }} elevation={3}>
          <Heading variant="h6" component="h3">
            Our Features
          </Heading>
          <List>
            <ListItem>
              <ListItemText primary="We have well furnished classes with A/C in well ventilated rooms." />
            </ListItem>
            <ListItem>
              <ListItemText primary="We have Parking facilities as per the individual needs." />
            </ListItem>
            <ListItem>
              <ListItemText primary="We have own two storied building with big playground." />
            </ListItem>
            <ListItem>
              <ListItemText primary="We have well furnished classes with CC Camera in well ventilated rooms for security purpose also." />
            </ListItem>
            <ListItem>
              <ListItemText primary="We have Highly experienced, qualified and dedicated teaching faculty." />
            </ListItem>
            <ListItem>
              <ListItemText primary="We have Well stocked library with necessary text book and reference material." />
            </ListItem>
            <ListItem>
              <ListItemText primary="We have Well equipped science and managed computer lab with internet facilities laboratory." />
            </ListItem>
            <ListItem>
              <ListItemText primary="We have Hostel facilities for boys & girls and Transportation facilities as per the individual needs." />
            </ListItem>
          </List>
        </StyledPaper>

        <StyledPaper sx={{ margin: 2 }} elevation={3}>
          <Heading variant="h6" component="h3">
            Discover our School
          </Heading>
          <Typography variant="body1" color="textSecondary" component="p">
            Igniting the spark of genius in every child. Amazing things happen here, and not by coincidence. LBA have perfected the art of pairing collaboration with unconventional thinking to create solutions that make a better tomorrow for everyone through quality education & putting theory to practical education. LBA have imagined all of these things, and then got to work making them a reality. What will you imagine?
            <br /><br />
            <strong>Ranked as leading and reputed institution</strong><br />
            Academic excellence and excellent board result<br />
            Scholarship for the meritorious and needs students<br />
            Highly experienced, qualified and dedicated teaching faculty<br />
            Read More
          </Typography>
        </StyledPaper>

        <StyledPaper sx={{ margin: 2 }} elevation={3}>
          <Heading variant="h6" component="h3">
            CONTACT US
          </Heading>
          <Typography variant="body1" color="textSecondary" component="p">
            Address: Bhagatpur, Mahendranagar, Nepal
            <br />
            Phone: 099521056, 099520894
            <br />
            Email: Lbaschool3@Gmail.Com
          </Typography>
        </StyledPaper>

        <Footer />
      </Container>
    </>
  );
};

export default Lba;
