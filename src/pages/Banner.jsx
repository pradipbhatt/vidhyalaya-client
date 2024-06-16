import React, { useState } from 'react';
import { Typography, Button, TextField, MenuItem, Box, Grid, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/system';

const StyledTextField = styled(TextField)(({ theme }) => ({
    minWidth: '200px',
    overflowX:'hidden',
    borderRadius: '8px',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderRadius: '8px',
    },
    '& .MuiSelect-icon': {
        right: '12px',
    },
}));

const StyledButton = styled(Button)({
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px',
    height: '100%',
    minWidth: '100px',
    paddingLeft: '16px',
    paddingRight: '16px',
});

const StyledSearchBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    display: 'flex',
    '& .MuiOutlinedInput-root': {
        borderRadius: '8px',
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
        '&:hover': {
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)',
        },
        '&.Mui-focused': {
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)',
        },
    },
    '& .MuiInputBase-input': {
        padding: '10px 14px',
    },
    '& .MuiButton-contained': {
        height: '100%',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: '0px',
        borderBottomRightRadius: '0px',
    },
}));

const Banner = () => {
    const [selectedSchool, setSelectedSchool] = useState('');
    const navigate = useNavigate();

    const handleSchoolSelect = (event) => {
        setSelectedSchool(event.target.value);
    };

    const handleFind = () => {
        if (selectedSchool) {
            navigate(`/schools/?school=${encodeURIComponent(selectedSchool)}`);
        }
    };

    return (
        <Box py={5} px={2} overflowX="hidden">
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" align="left">
                        Let’s <br />
                        <span style={{ color: '#007b5e' }}>Compare & connect the best</span>
                    </Typography>
                    <Box display="flex" alignItems="center" mt={3}>
                        <StyledTextField
                            select
                            size="small"
                            variant="outlined"
                            value={selectedSchool}
                            onChange={handleSchoolSelect}
                            SelectProps={{
                                IconComponent: ArrowDropDownIcon,
                            }}
                        >
                            <MenuItem value="Radiant Secondary School">Radiant Secondary School</MenuItem>
                            <MenuItem value="Janajyoti Multiple Campus Mahendranagar">Janajyoti Multiple Campus Mahendranagar</MenuItem>
                            <MenuItem value="Kailali Multiple Campus">Kailali Multiple Campus</MenuItem>
                            <MenuItem value="Morning Glory Secondary School">Morning Glory Secondary School</MenuItem>
                            <MenuItem value="Little Buddha Academy">Little Buddha Academy</MenuItem>
                            <MenuItem value="Shadharan Secondary School">Shadharan Secondary School</MenuItem>
                        </StyledTextField>
                        <Box ml={2} flexGrow={1}>
                            <StyledSearchBox>
                                <TextField
                                    placeholder="Search by School Name"
                                    size="small"
                                    variant="outlined"
                                    value={selectedSchool}
                                    onChange={(e) => setSelectedSchool(e.target.value)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <StyledButton
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleFind}
                                                >
                                                    Find
                                                </StyledButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </StyledSearchBox>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box display="flex" justifyContent="center">
                        <img
                            src="https://www.pngall.com/wp-content/uploads/8/Child-Student-PNG-Free-Image.png"
                            alt="Comparison"
                            style={{ maxWidth: '60%', height: 'auto', borderRadius: '10px' }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;
