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

const RadiantSchool = () => {
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
            <img src="https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/RHSSBKN.jpg/640px-RHSSBKN.jpg&w=640&q=50" alt="Radiant Secondary School" />
          </SliderImage>
          <SliderImage>
            <img src="https://i.pinimg.com/originals/03/2f/62/032f62abd9ae48dcf14d10d2b9909c81.jpg" alt="Radiant Secondary School" />
          </SliderImage>
          <SliderImage>
            <img src="https://theedunepal.ap-south-1.linodeobjects.com/uploads/clients/radiantsecondaryschool/banner/94866107_104168927947814_936785904024944640_o.jpg" alt="Radiant Secondary School" />
          </SliderImage>
        </Slider>
        <StyledPaper sx={{ margin: 2 }} elevation={2}>
          <Heading variant="h6" component="h3">
            Radiant Secondary School
          </Heading>
          <Typography variant="body1" color="textSecondary" component="p">
            Radiant Secondary School is a secondary school located in the area
            of Katan, Bhimdatta / Mahendranagar, Mahakali, Kanchanpur District
            of Nepal. It lies in Mahakali Zone of Nepal. It lies in the
            Far-Western Development Region, Nepal. It is an educational
            institute that offers Basic Level and Secondary Level education to
            the students. Every year about 1300 students attend entrance exams
            to study in this school, but only about 50% i.e. about 600 students
            only qualify. It offers intermediate education on science and
            management streams. It allows students to study other subjects in
            Grade XII as non-credit subjects.
          </Typography>
        </StyledPaper>
        <StyledPaper sx={{ margin: 2 }} elevation={3}>
          <Heading variant="h6" component="h3">
            Admissions Information:
          </Heading>
          <Typography variant="body1" color="textSecondary" component="p">
            Registered candidates have to appear in entrance test conducted by the
            school management. The format of entrance test will be shown as.
            Science Stream:
            - Comp. Math 30
            - English 25
            - Science 40
            - Interview 20
            Management Stream:
            - Comp. Math 40
            - English 40
            - Interview 20
          </Typography>
        </StyledPaper>

        <StyledPaper sx={{ margin: 2 }} elevation={3}>
          <Heading variant="h6" component="h3">
            Academic Programs:
          </Heading>
          <Typography variant="body1" color="textSecondary" component="p">
            Radiant Secondary School (RSS) in Mahendranagar, Nepal offers Ten Plus Two (10+2) programs in Science and Management. The school also offers a variety of scholarships for deserving and marginalized students.
          </Typography>
        </StyledPaper>

        <StyledPaper sx={{ margin: 2 }} elevation={3}>
          <Heading variant="h6" component="h3">
            Extracurricular Activities:
          </Heading>
          <Typography variant="body1" color="textSecondary" component="p">
            Radiant attempts to impart not only bookish knowledge but also offers several extra-curricular activities like football, volleyball, cricket, basketball, table tennis, badminton, athletics, quiz contest, debate competition, essay, chess, for-all round physical and mental fitness of the students. Thus, Radiant has been providing such opportunities to the students by conducting intra school extra-curricular programs and participating them in different inter school extra-curricular competitions.
          </Typography>
        </StyledPaper>

        <StyledPaper sx={{ margin: 2 }} elevation={3}>
          <Heading variant="h6" component="h3">
            Student Support Services:
          </Heading>
          <Typography variant="body1" color="textSecondary" component="p">
            The administration and faculty members closely monitor the overall academic progress, personality development and behavioral aspects of the students to provide necessary encouragement and suggestions to make them excel in their objectives. Teaching here is totally student-centered and activities like group exercises and discussions, regular assignments and examination, progress analysis and problem identification, regular project works, counseling for improvement, extra tutorial classes and identification of practical applications of achieved knowledge creates an astonishing environment at Radiant for the students to flourish and blossom.
          </Typography>
        </StyledPaper>

        <StyledPaper sx={{ margin: 2 }} elevation={3}>
          <Heading variant="h6" component="h3">
            Facilities and Resources:
          </Heading>
          <List sx={{ backgroundColor: "background.paper" }}>
            <ListItem>
              <ListItemText primary="Highly qualified, dedicated and experienced faculty members" />
            </ListItem>
            <ListItem>
              <ListItemText primary="A well-set library, study center with textbooks, magazines and newspapers" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Well-equipped and properly maintained laboratories" />
            </ListItem>
          </List>
        </StyledPaper>

        <StyledPaper sx={{ margin: 2 }} elevation={3}>
          <Heading variant="h6" component="h3">
            Contact Details:
          </Heading>
          <Typography variant="body1" color="textSecondary" component="p">
            Science Campus Road, Bhimdut Municipality-18, Mahendranagar,
            Kanchanpur, Sudurpaschim Province, Nepal
            <br />
            Email: radianths.edu.np@gmail.com
            <br />
            Phone: +977-99-525169
          </Typography>
          <iframe
            width="90%"
            height="300"
            loading="lazy"
            allowFullScreen
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d550442.525747399!2d79.57737990332356!3d28.794369129251955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1ac0461e0542b%3A0x8a980f34da804f5!2z4KSw4KWH4KSh4KS_4KSv4KSo4KWN4KSfIOCkruCkvuCkp-CljeCkr-CkruCkv-CklSDgpLXgpL_gpKbgpY3gpK_gpL7gpLLgpK8!5e0!3m2!1sne!2snp!4v1718483374134!5m2!1sne!2snp"
          />
        </StyledPaper>
        <Footer />
      </Container>
    </>
  );
};

export default RadiantSchool;
