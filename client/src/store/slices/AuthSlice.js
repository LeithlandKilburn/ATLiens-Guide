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
      state.user = action.payload.user;
      state.authToken = action.payload.jwt_token;
    },
    logout: (state) => {
      state.authToken = '';
      state.user = {};
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
