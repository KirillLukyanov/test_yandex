import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from 'services';
import { PostDTO } from 'components/Posts';

export const fetchPosts = createAsyncThunk<PostDTO[]>(
  'fetchPosts',
  async (_, thunkAPI) => {
    try {
      const response = await apiClient.get('/posts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('fetchPosts error');
    }
  },
);
