import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'components/Counter';

export const rootReducer = combineReducers({
  counter: counterReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  // TODO
  devTools: true,
});
