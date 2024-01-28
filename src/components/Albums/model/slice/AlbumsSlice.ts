import { createSlice } from '@reduxjs/toolkit';
import { STATUS_STORE } from 'store/types/StatusStore';
import { fetchAlbums } from 'services';
import { AlbumsSchema } from 'components/Albums';

const initialState: AlbumsSchema = {
  status: STATUS_STORE.IDLE,
  albums: [],
};

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbums.pending, (state) => {
        state.status = STATUS_STORE.LOADING;
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.status = STATUS_STORE.SUCCEEDED;
        state.albums = action.payload;
      })
      .addCase(fetchAlbums.rejected, (state, action) => {
        state.status = STATUS_STORE.FAILED;
        state.error = action.error?.message;
      });
  },
});

export const {
  actions: albumsActions,
  reducer: albumsReducer,
} = albumsSlice;
