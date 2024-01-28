import { createSelector } from '@reduxjs/toolkit';
import { PostsSchema } from 'components/Posts';
import { getPosts } from './getPosts';

export const getPostsStatus = createSelector(
  getPosts,
  (posts: PostsSchema) => posts.status,

);
