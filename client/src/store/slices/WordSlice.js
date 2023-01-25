import { createSlice } from '@reduxjs/toolkit';

// organize data into slices
// create slice method
export const wordSlice = createSlice({
  //& name it
  name: 'word',

  // we want to put what we want to pass + the initial values
  initialState: {
    words: [],
    favWords: [],
  },

  // reducers + actions
  reducers: {
    // switch statements with different cases
    // if you call login, the reducer hits the login case
    wordData: (state, action) => {
      state.words = [action.payload];
    },
    deleteWord: (state, action) => {
      state.words = state.words.filter(
        (word) => word.wordId !== action.payload
      );
    },
    favWords: (state, action) => {
      state.favWords = [action.payload];
    },
  },
});

export const { wordData, deleteWord, favWords } = wordSlice.actions;
export default wordSlice.reducer;

// User(userId=b3136b5b-2249-449c-9aff-9dea6e9ef123, username=millertime2, password=$2a$10$FuNjQWtQ6cpWGI5al0OcP.rxAbM69SZuV9CNZ/xLHhF1cNAmlrBAa, authorities=[ADMIN], enabled=true, accountNonExpired=true, accountNonLocked=true, credentialsNonExpired=true)
