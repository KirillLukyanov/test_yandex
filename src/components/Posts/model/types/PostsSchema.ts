import { STATUS_STORE } from 'store/StatusStore';
import { PostDTO } from './PostDTO';

export type PostsSchema = {
    posts: PostDTO[],
    status: STATUS_STORE,
    error?: string
}
