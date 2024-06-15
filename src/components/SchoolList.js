import React from 'react';
import { Typography, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const schools = [
    {
        id: 1,
        image: 'https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/RHSSBKN.jpg/640px-RHSSBKN.jpg&w=640&q=50',
        name: 'Radiant Secondary School',
        description: 'Radiant Secondary School was founded in 2057 BS (2000 AD) by some academicians...'
    },
    {
        id: 2,
        image: 'https://i.ytimg.com/vi/KjbyfK_OpRY/maxresdefault.jpg',
        name: 'Little Buddha Academy',
        description: 'Little Buddha Academy was founded in 2057 BS (2000 AD) by some academicians...'
    },
    {
        id: 3,
        image: 'https://www.collegenp.com/uploads/2018/10/Morning-Glory-Secondary-School-1.jpg',
        name: 'Morning Glory Secondary School',
        description: 'Morning Glory was founded in 2057 BS (2000 AD) by some academicians...'
    },
    {
        id: 4,
    image: 'https://scontent.fdhi1-1.fna.fbcdn.net/v/t39.30808-6/411190576_222019397605192_564528320247164097_n.jpg?stp=dst-jpg_s600x600&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CgBihwJfPDkQ7kNvgH7olVf&_nc_ht=scontent.fdhi1-1.fna&oh=00_AYDVL68JCTvNenikPIwHQ2aPJH_yoyRE-pyGFSacsm9KlA&oe=6673D782',
    name: 'Shadharan SecondarySchool',
    description: 'Shadharan was founded in 2057 BS (2000 AD) by some academicians...'
      },
    // Repeat as necessary
];

const SchoolList = () => {
    return (
        <Box py={5}>
            <Typography variant="h4" textAlign="center" mb={5}>
                Find Your Best School !!!
            </Typography>
            <Grid container spacing={3}>
                {schools.map((school, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={school.image}
                                alt={school.name}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {school.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {school.description}
                                </Typography>
                                <Box mt={2}>
                                    {Array(4).fill().map((_, i) => (
                                        <span key={i} style={{ color: 'gold' }}>⭐</span>
                                    ))}
                                </Box>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    sx={{ mt: 2 }}
                                    component={Link}
                                    to={`/schools/${school.id}`}
                                >
                                    Read More
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default SchoolList;
