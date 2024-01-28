import { createAsyncThunk } from '@reduxjs/toolkit';
import { createApiClient } from 'services';

const apiClient = createApiClient();

export const getAlbums = createAsyncThunk(
  'getAlbums',
  async (_, thunkAPI) => {
    try {
      const response = await apiClient.get('/albums');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('getAlbums error');
    }
  },
);
