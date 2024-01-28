import { STATUS_STORE } from 'store/types/StatusStore';
import { AlbumDTO } from './AlbumDTO';

export type AlbumsSchema = {
    albums: AlbumDTO[],
    status: STATUS_STORE,
    error?: string
}
