import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers } from 'services';
import { useAppDispatch } from 'store';
import { STATUS_STORE } from 'store/StatusStore';
import { getUsersError, getUsersList, getUsersStatus } from './model/selectors';

export const Users = () => {
  const dispatch = useAppDispatch();
  const users = useSelector(getUsersList);
  const status = useSelector(getUsersStatus);
  const error = useSelector(getUsersError);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      {status === STATUS_STORE.LOADING && 'Загрузка...'}
      {status === STATUS_STORE.FAILED && error}
      {users.map(({ id, name }) => (
        <div key={id}>
          <span>{`${id}: ${name}`}</span>
        </div>
      ))}
    </>
  );
};
