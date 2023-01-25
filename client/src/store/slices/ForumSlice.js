import { createSlice } from '@reduxjs/toolkit';

export const forumSlice = createSlice({
  name: 'forum',

  initialState: {
    posts: [],
    chosenThread: {}
  },

  // reducers + actions
  reducers: {
    // switch statements with different cases
    // if you call login, the reducer hits the login case
    setForumPosts: (state, action) => {
      state.posts = action.payload;
    },
    chooseThread: (state, action) => {
      state.chosenThread = action.payload;
    }
  },
});

export const { setForumPosts, chooseThread } = forumSlice.actions;
export default forumSlice.reducer;