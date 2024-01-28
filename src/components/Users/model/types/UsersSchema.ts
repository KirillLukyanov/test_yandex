import { UserDTO } from 'components/Users/model/types/UserDTO';
import { STATUS_STORE } from 'store/StatusStore';

export type UsersSchema = {
    users: UserDTO[],
    status: STATUS_STORE,
    error?: string
}
