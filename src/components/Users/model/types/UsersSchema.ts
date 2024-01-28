import { STATUS_STORE } from 'store/StatusStore';
import { UserDTO } from './UserDTO';

export type UsersSchema = {
    users: UserDTO[],
    status: STATUS_STORE,
    error?: string
}
