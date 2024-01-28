import { createSelector } from '@reduxjs/toolkit';
import { UsersSchema } from 'components/Users';
import { getUsers } from './getUsers';

export const getUsersStatus = createSelector(
  getUsers,
  (users: UsersSchema) => users.status,
);
