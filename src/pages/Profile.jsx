import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../redux/reducers/userSlice';
import styled from 'styled-components';
import { Typography, Avatar, CircularProgress, Box } from '@mui/material';
import { FiUser } from 'react-icons/fi';

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
`;

const ProfileCard = styled.div`
  background-color: #fff;
  box-shadow: 1px 1px 12px 11px rgba(176,169,255,0.75);
-webkit-box-shadow: 1px 1px 12px 11px rgba(126,169,255,0.75);
-moz-box-shadow: 1px 1px 12px 11px rgba(176,169,255,0.75);
  border-radius: 8px;
  padding: 40px;
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProfileAvatar = styled(Avatar)`
  width: 500px;
  height: 500px;
  background-color: ${({ theme }) => theme.primary};
  margin-bottom: 20px;
`;

const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser, status, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (!currentUser) {
      dispatch(fetchUserData());
    }
  }, [dispatch, currentUser]);

  if (status === 'loading') {
    return (
      <ProfileContainer>
        <CircularProgress />
      </ProfileContainer>
    );
  }

  if (status === 'failed') {
    return (
      <ProfileContainer>
        <Typography variant="h6">Error: {error}</Typography>
      </ProfileContainer>
    );
  }

  return (
    <ProfileContainer>
      {currentUser ? (
        <ProfileCard>
          <ProfileAvatar>
            <FiUser size={50} />
          </ProfileAvatar>
          <Box mt={2}>
            <Typography variant="h5">{currentUser.name}</Typography>
            <Typography variant="body1">{currentUser.email}</Typography>
            {/* Add more fields as necessary */}
          </Box>
        </ProfileCard>
      ) : (
        <Typography variant="h6">No user data available</Typography>
      )}
    </ProfileContainer>
  );
};

export default Profile;
