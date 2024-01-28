import { createAsyncThunk } from '@reduxjs/toolkit';
import { createApiClient } from 'services';
import { PostDTO } from 'components/Posts';

const apiClient = createApiClient();

export const fetchPosts = createAsyncThunk<PostDTO[]>(
  'fetchPosts',
  async (_, thunkAPI) => {
    try {
      const response = await apiClient.get('/posts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('getPosts error');
    }
  },
);
