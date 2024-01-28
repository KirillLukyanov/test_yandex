import { createSelector } from '@reduxjs/toolkit';
import { AlbumsSchema } from 'components/Albums';
import { getAlbums } from './getAlbums';

export const getAlbumsError = createSelector(
  getAlbums,
  (albums: AlbumsSchema) => albums.error,
);
