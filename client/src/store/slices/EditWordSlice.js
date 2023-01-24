import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'editWord',

  initialState: {
    word: {},
  },

  reducers: {
    editWordData: (state, action) => {
      console.log(action.payload);
      state.word = action.payload;
    },
  },
});

export const { editWordData } = authSlice.actions;
export default authSlice.reducer;
