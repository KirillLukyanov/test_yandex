import { CounterSchema } from 'components/Counter';
import { UsersSchema } from 'components/Users';
import { PostsSchema } from 'components/Posts';
import { AlbumsSchema } from 'components/Albums';

export type StateSchema = {
    counter: CounterSchema;
    users: UsersSchema;
    posts: PostsSchema;
    albums: AlbumsSchema;
}
