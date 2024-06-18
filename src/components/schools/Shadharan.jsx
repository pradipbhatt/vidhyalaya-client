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

const Shadharan = () => {
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
            <img src="https://scontent.fdhi1-1.fna.fbcdn.net/v/t39.30808-6/347378218_1448819962554409_2410403707839032483_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pldLOizsRIYQ7kNvgFtD43z&_nc_ht=scontent.fdhi1-1.fna&oh=00_AYBzFaAMc5JMUH-22fc56FlPXZ7d7I2KDr5VBpIp3or4og&oe=6673C959" alt="Slider Image 1" />
          </SliderImage>
          <SliderImage>
            <img src="https://scontent.fdhi1-1.fna.fbcdn.net/v/t39.30808-6/355151110_104868812653585_4768490381799817338_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7BHuyag6emYQ7kNvgFx9B7P&_nc_ht=scontent.fdhi1-1.fna&oh=00_AYDv-uJBIV0DA97PFNNxRRfrt6C8sEQtfp-I2EJHmmQpKw&oe=6673D1A6" alt="Slider Image 2" />
          </SliderImage>
          <SliderImage>
            <img src="https://scontent.fdhi1-1.fna.fbcdn.net/v/t39.30808-6/411190576_222019397605192_564528320247164097_n.jpg?stp=dst-jpg_s600x600&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CgBihwJfPDkQ7kNvgH7olVf&_nc_ht=scontent.fdhi1-1.fna&oh=00_AYDVL68JCTvNenikPIwHQ2aPJH_yoyRE-pyGFSacsm9KlA&oe=6673D782" alt="Slider Image 3" />
          </SliderImage>
        </Slider>
        <StyledPaper sx={{ margin: 2 }} elevation={2}>
          <Heading variant="h6" component="h3">
            Mahendranagar Model Secondary - Sadharan School Mnr, Kanchanpur
          </Heading>
          <Typography variant="body1" color="textSecondary" component="p">
            Mahendranagar Model Secondary - Sadharan School Mnr, located in Mahendranagar, Kanchanpur, Nepal, is a distinguished community school and college catering to the educational needs of students in the region. With a commitment to providing quality education, the school emphasizes both academic excellence and holistic development.
          </Typography>
        </StyledPaper>

        <StyledPaper sx={{ margin: 2 }} elevation={3}>
          <Heading variant="h6" component="h3">
            About Us
          </Heading>
          <Typography variant="body1" color="textSecondary" component="p">
            Mahendranagar Model Secondary - Sadharan School Mnr serves as a cornerstone of education in its community, offering a supportive environment for students to thrive academically and personally. The school prides itself on its inclusive approach, welcoming students from diverse backgrounds and nurturing their talents.
          </Typography>
        </StyledPaper>

        <StyledPaper sx={{ margin: 2 }} elevation={3}>
          <Heading variant="h6" component="h3">
            Academic Offerings
          </Heading>
          <Typography variant="body1" color="textSecondary" component="p">
            The school provides a comprehensive range of academic programs designed to prepare students for future challenges. From elementary education to higher secondary levels, Mahendranagar Model Secondary offers a curriculum that blends traditional learning with modern educational practices.
          </Typography>
        </StyledPaper>

        <StyledPaper sx={{ margin: 2 }} elevation={3}>
          <Heading variant="h6" component="h3">
            Facilities and Resources
          </Heading>
          <List sx={{ backgroundColor: "background.paper" }}>
            <ListItem>
              <ListItemText primary="Well-equipped classrooms and laboratories" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Library with a wide array of books and resources" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Sports facilities for physical development" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Computer labs with internet access" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Extracurricular activities for all-round development" />
            </ListItem>
          </List>
        </StyledPaper>

        <StyledPaper sx={{ margin: 2 }} elevation={3}>
          <Heading variant="h6" component="h3">
            Contact Details
          </Heading>
          <Typography variant="body1" color="textSecondary" component="p">
            Address: Mahendranagar, Kanchanpur, Nepal
            <br />
            Phone: 099-521264
            <br />
            Website: <a href="https://magendranagarmavi.edu.np" target="_blank" rel="noopener noreferrer">magendranagarmavi.edu.np</a>
          </Typography>
        </StyledPaper>

        <Footer />
      </Container>
    </>
  );
};

export default Shadharan;
