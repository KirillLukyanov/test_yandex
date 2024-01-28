import { createSlice } from '@reduxjs/toolkit';
import { STATUS_STORE } from 'store/StatusStore';
import { fetchUsers } from 'services';
import { UsersSchema } from 'components/Users';

const initialState: UsersSchema = {
  status: STATUS_STORE.IDLE,
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = STATUS_STORE.LOADING;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = STATUS_STORE.SUCCEEDED;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = STATUS_STORE.FAILED;
        state.error = action.error?.message;
      });
  },
});

export const {
  actions: usersActions,
  reducer: usersReducer,
} = usersSlice;
