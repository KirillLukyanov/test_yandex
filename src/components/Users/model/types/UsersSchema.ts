import { STATUS_STORE } from 'store/types/StatusStore';
import { UserDTO } from './UserDTO';

export type UsersSchema = {
    users: UserDTO[],
    status: STATUS_STORE,
    error?: string
}
