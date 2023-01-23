import { createSlice } from '@reduxjs/toolkit';

// organize data into slices
// create slice method
export const authSlice = createSlice({
  //& name it
  name: 'word',

  // we want to put what we want to pass + the initial values
  initialState: {
    words: [],
  },

  // reducers + actions
  reducers: {
    // switch statements with different cases
    // if you call login, the reducer hits the login case
    wordData: (state, action) => {
      console.log(action.payload);
      state.words.push(action.payload);
    },
    deleteWord: (state, action) => {
      state.words.filter((word) => word.wordId !== action.payload);
    },
  },
});

export const { wordData, deleteWord } = authSlice.actions;
export default authSlice.reducer;
