import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('blog/fetchPosts', async () => {
  const response = await axios.get('/api/posts');
  return response.data;
});

export const createPost = createAsyncThunk('blog/createPost', async (newPost) => {
  const response = await axios.post('/api/posts', newPost);
  return response.data;
});

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

export default blogSlice.reducer;
