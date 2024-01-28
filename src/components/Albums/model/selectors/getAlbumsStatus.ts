import { createSelector } from '@reduxjs/toolkit';
import { AlbumsSchema } from 'components/Albums';
import { getAlbums } from './getAlbums';

export const getAlbumsStatus = createSelector(
  getAlbums,
  (albums: AlbumsSchema) => albums.status,

);
