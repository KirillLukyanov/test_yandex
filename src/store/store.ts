import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'components/Counter';
import { usersReducer } from 'components/Users';

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  // TODO
  devTools: true,
});
