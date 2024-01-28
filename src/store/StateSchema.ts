import { CounterSchema } from 'components/Counter';
import { UsersSchema } from 'components/Users';

export type StateSchema = {
    counter: CounterSchema;
    users: UsersSchema;
}
