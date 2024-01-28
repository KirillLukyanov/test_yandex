import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from 'services';

export const fetchAlbums = createAsyncThunk(
  'fetchAlbums',
  async (_, thunkAPI) => {
    try {
      const response = await apiClient.get('/albums');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('fetchAlbums error');
    }
  },
);
