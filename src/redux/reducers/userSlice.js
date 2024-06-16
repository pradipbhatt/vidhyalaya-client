import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch user data if the token is present
export const fetchUserData = createAsyncThunk('user/fetchUserData', async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('vidhyalaya-app-token');
    if (token) {
      const response = await axios.get('https://vidhyalaya-backend.onrender.com/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    }
    return rejectWithValue('No token found');
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload.user;
      localStorage.setItem('vidhyalaya-app-token', action.payload.token);
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem('vidhyalaya-app-token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
