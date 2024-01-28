import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from 'services';
import { UserDTO } from 'components/Users';

export const fetchUsers = createAsyncThunk<UserDTO[]>(
  'fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response = await apiClient.get('/users');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('fetchUsers error');
    }
  },
);
