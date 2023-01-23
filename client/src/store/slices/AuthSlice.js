import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',

  initialState: {
    user: {},
    authToken: '',
  },

  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      state.user = action.payload?.user;
      state.authToken = action.payload?.jwt_token;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
