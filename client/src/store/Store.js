import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/AuthSlice.js';
import wordReducer from './slices/WordSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    word: wordReducer,
  },
});
