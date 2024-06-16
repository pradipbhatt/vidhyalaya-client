import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import Footer from '../pages/Footer';
import ContactUs from '../pages/ContactUs';

const AboutContainer = styled(Box)`
  padding: 40px 0 0px 0;
  margin: 0 0 -30px 0;
  overflow-y: scroll;
`;

const Heading = styled(Typography)`
  font-family: 'Times New Roman', Times, serif;
  color: #003322;
  margin-bottom: 20px;
`;

const Paragraph = styled(Typography)`
  font-family: 'Times New Roman', Times, serif;
  color: #003322;
  margin-bottom: 20px;
`;

const Image = styled('img')`
  width: 70%;
  height: 70%;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
  }
  ${'' /* border: 4px solid black; */}
`;

const ObjectiveList = styled('ul')`
  list-style-type: disc;
  padding-left: 20px;
`;

const ObjectiveItem = styled('li')`
  font-family: 'Times New Roman', Times, serif;
  color: #003322;
  margin-bottom: 10px;
`;

const DeveloperCard = styled(Card)`
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const DeveloperImage = styled(CardMedia)`
  height: 200px;
`;

const developers = [
  {
    name: 'Frontend Developer',
    title: 'Frontend Developer',
    description: 'Responsible for the design and implementation of the user interface.',
    img: 'https://scontent.fdhi1-1.fna.fbcdn.net/v/t39.30808-6/418234810_321123314253880_5025485568730399203_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VfxFjZxdDk4Q7kNvgFgZJ72&_nc_ht=scontent.fdhi1-1.fna&oh=00_AYDLdiPRxRa6NlIVtYiBLE7Dvupo-9VXqmb2MB2npSrj0g&oe=66744E0B'
  },
  {
    name: 'Backend & Database Expert',
    title: 'Backend & Database Expert',
    description: 'Handles server-side logic and database management.',
    img: 'https://pradipbhatt.com.np/medias/parry.jpg'
  },
  {
    name: 'QA Engineer',
    title: 'Quality Assurance Engineer',
    description: 'Ensures the quality of the application through testing.',
    img: 'https://avatars.githubusercontent.com/u/108856386?v=4?s=400'
  },
  {
    name: 'Data Analyst',
    title: 'Data Analyst',
    description: 'Analyzes data to provide insights and reports.',
    img: 'https://www.shutterstock.com/shutterstock/photos/445990711/display_1500/stock-vector-sketch-of-school-girl-and-backpack-on-ground-hand-drawn-illustration-445990711.jpg'
  },
  {
    name: 'Tester',
    title: 'Tester',
    description: 'Performs testing to find and report bugs.',
    img: 'https://media.discordapp.net/attachments/1235613268882624553/1240232380485206056/IMG-20240307-WA0006.jpg?ex=666f5729&is=666e05a9&hm=2478f2a954b86c30b78d6a4905469de68027151f1c3bb1daac32db2794e67bc8&=&format=webp&width=186&height=468'
  }
];

const About = () => {
  return (
   <>
     <AboutContainer>
      <Container maxWidth="lg">
        {/* First Row */}
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Image src="https://www.pngall.com/wp-content/uploads/8/Student-PNG-Clipart.png" alt="Team Image" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Heading variant="h4">About Our Team and Project</Heading>
            <Paragraph variant="body1">
              We are Team Vidhyalaya from Far Western University. This project is our minor project, where we compare two schools and show their relative data to the users. Additionally, we include all the relevant resources required for students when planning their undergraduate career.
            </Paragraph>
          </Grid>
        </Grid>

        {/* Second Row */}
        <Grid container spacing={3} alignItems="center" mt={5}>
          <Grid item xs={12} md={6}>
            <Heading variant="h4">Objectives</Heading>
            <ObjectiveList>
              <ObjectiveItem>Compare the colleges.</ObjectiveItem>
              <ObjectiveItem>Provide relevant resources for students.</ObjectiveItem>
              <ObjectiveItem>Help students plan their undergraduate career.</ObjectiveItem>
            </ObjectiveList>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image src="https://www.pngall.com/wp-content/uploads/8/University-Student-PNG-Free-Image.png" alt="Objectives Image" />
          </Grid>
        </Grid>

        {/* Third Row */}
        <Grid container spacing={3} mt={3}>
          {developers.map((developer, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <DeveloperCard>
                <DeveloperImage
                  component="img"
                  image={developer.img}
                  title={developer.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {developer.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {developer.description}
                  </Typography>
                </CardContent>
              </DeveloperCard>
            </Grid>
          ))}
        </Grid>
      </Container>
      <ContactUs />
    <Footer/>
    </AboutContainer>
   </>
  );
};

export default About;
