import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';
import postReducer from './postSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    posts: postReducer,
  },
});
