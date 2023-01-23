import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'editWord',

  initialState: {
    words: [],
  },

  reducers: {
    editWordData: (state, action) => {
      console.log(action.payload);
      state.words.push(action.payload);
    },
  },
});

export const { editWordData } = authSlice.actions;
export default authSlice.reducer;
