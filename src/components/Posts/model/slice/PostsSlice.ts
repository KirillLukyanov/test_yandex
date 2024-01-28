import { createSlice } from '@reduxjs/toolkit';
import { STATUS_STORE } from 'store/StatusStore';
import { fetchPosts } from 'services';
import { PostsSchema } from 'components/Posts';

const initialState: PostsSchema = {
  status: STATUS_STORE.IDLE,
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = STATUS_STORE.LOADING;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = STATUS_STORE.SUCCEEDED;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = STATUS_STORE.FAILED;
        state.error = action.error?.message;
      });
  },
});

export const {
  actions: postsActions,
  reducer: postsReducer,
} = postsSlice;
