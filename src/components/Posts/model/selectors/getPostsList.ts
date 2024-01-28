import { createSelector } from '@reduxjs/toolkit';
import { PostsSchema } from 'components/Posts';
import { getPosts } from './getPosts';

export const getPostsList = createSelector(
  getPosts,
  (posts: PostsSchema) => posts.posts,
);
