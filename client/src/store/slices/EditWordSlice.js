import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'editWord',

  initialState: {
    word: {},
    formType: 'add',
  },

  reducers: {
    editWordData: (state, action) => {
      console.log(action.payload);
      state.word = action.payload;
    },
    setFormType: (state, action) => {
      console.log(action.payload);
      state.formType = action.payload;
    },
  },
});

export const { editWordData, setFormType } = authSlice.actions;
export default authSlice.reducer;
