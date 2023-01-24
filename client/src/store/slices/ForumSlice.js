import { createSlice } from '@reduxjs/toolkit';

export const forumSlice = createSlice({
  name: 'forum',

  initialState: {
    posts: []
  },

  // reducers + actions
  reducers: {
    // switch statements with different cases
    // if you call login, the reducer hits the login case
    setForumPosts: (state, action) => {
      state.posts = action.payload;
    }
  },
});

export const { setForumPosts } = forumSlice.actions;
export default forumSlice.reducer;