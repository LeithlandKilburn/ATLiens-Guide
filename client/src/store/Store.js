import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/AuthSlice.js';
import wordReducer from './slices/WordSlice.js';
import editWordReducer from './slices/EditWordSlice.js';

export default configureStore({
  reducer: {
    auth: authReducer,
    word: wordReducer,
    editWord: editWordReducer,
  },
});
