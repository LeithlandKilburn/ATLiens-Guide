import { createSlice } from '@reduxjs/toolkit';

// organize data into slices
// create slice method
export const authSlice = createSlice({
  //& name it
  name: 'word',

  // we want to put what we want to pass + the initial values
  initialState: {
    words: [
      {
        wordId: '',
        name: '',
        definition: '',
        example: '',
        useRating: '',
        videoURL: '',
        category1Id: '',
        category2Id: '',
        category3Id: '',
      },
    ],
  },

  // reducers + actions
  reducers: {
    // switch statements with different cases
    // if you call login, the reducer hits the login case
    wordData: (state, action) => {
      console.log(action.payload);
      state.words.push(action.payload);
    },
  },
});

export const { wordData } = authSlice.actions;
export default authSlice.reducer;
