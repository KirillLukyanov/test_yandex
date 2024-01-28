import { createSelector } from '@reduxjs/toolkit';
import { UsersSchema } from 'components/Users';
import { getUsers } from './getUsers';

export const getUsersError = createSelector(
  getUsers,
  (users: UsersSchema) => users.error,
);
