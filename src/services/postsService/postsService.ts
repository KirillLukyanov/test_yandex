import { createAsyncThunk } from '@reduxjs/toolkit';
import { createApiClient } from 'services';

const apiClient = createApiClient();

export const getPosts = createAsyncThunk(
  'getPosts',
  async (_, thunkAPI) => {
    try {
      const response = await apiClient.get('/posts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('getPosts error');
    }
  },
);
