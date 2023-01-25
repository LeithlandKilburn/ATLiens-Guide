import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',

  initialState: {
    user: {},
    authToken: '',
    authorities: '',
    formLogInType: 'log in',
  },

  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      state.user = action.payload.user;
      state.authToken = action.payload.jwt_token;
      state.authorities = action.payload.authorities;
    },
    logout: (state) => {
      state.authToken = '';
      state.user = {};
    },
    setFormLogInType: (state, action) => {
      console.log(action.payload);
      state.formLogInType = action.payload;
    },
  },
});

export const { login, logout, setFormLogInType } = authSlice.actions;
export default authSlice.reducer;
