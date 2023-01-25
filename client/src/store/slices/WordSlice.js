import { createSlice } from '@reduxjs/toolkit';

// organize data into slices
// create slice method
export const wordSlice = createSlice({
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
      state.words = [action.payload];
    },
    deleteWord: (state, action) => {
      state.words = [];
    },
  },
});

export const { wordData, deleteWord } = wordSlice.actions;
export default wordSlice.reducer;
