import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'components/Counter';
import { usersReducer } from 'components/Users';
import { postsReducer } from 'components/Posts';
import { albumsReducer } from 'components/Albums';

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
  posts: postsReducer,
  albums: albumsReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  // TODO
  devTools: true,
});
