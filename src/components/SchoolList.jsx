import React from 'react';
import { Typography, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

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
        name: 'Shadharan Secondary School',
        description: 'Shadharan was founded in 2057 BS (2000 AD) by some academicians...'
    },
    // Repeat as necessary
];

const SchoolList = () => {
    const ScrollableBox = styled(Box)({
        overflowY: 'auto',
        width: '100%',
        maxHeight: 'calc(100vh -0px)', // Adjust as necessary based on your layout
        padding: '0 80px', // Added padding on left and right
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center aligns items
    });

    const StyledCard = styled(Card)({
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
    });

    const StyledCardMedia = styled(CardMedia)({
        height: '140px',
        objectFit: 'cover',
    });

    const StyledCardContent = styled(CardContent)({
        flexGrow: 1,
    });

    const StyledButton = styled(Button)({
        marginTop: 'auto',
    });

    return (
        <ScrollableBox py={5}>
            <Typography variant="h4" textAlign="center" mb={5}>
                Find Your Best School !!!
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {schools.map((school) => (
                    <Grid item xs={12} sm={6} md={4} key={school.id}>
                        <StyledCard>
                            <StyledCardMedia
                                component="img"
                                image={school.image}
                                alt={school.name}
                            />
                            <StyledCardContent>
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
                            </StyledCardContent>
                            <StyledButton
                                variant="outlined"
                                color="primary"
                                component={Link}
                                to={`/schools/${school.id}`}
                            >
                                Read More
                            </StyledButton>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </ScrollableBox>
    );
};

export default SchoolList;
