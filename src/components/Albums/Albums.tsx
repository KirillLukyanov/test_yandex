import { memo } from 'react';
import { useSelector } from 'react-redux';
import { STATUS_STORE } from 'store/StatusStore';
import { getAlbumsError, getAlbumsList, getAlbumsStatus } from './model/selectors';

export const Albums = memo(() => {
  const albums = useSelector(getAlbumsList);
  const status = useSelector(getAlbumsStatus);
  const error = useSelector(getAlbumsError);

  return (
    <div>
      {status === STATUS_STORE.LOADING && 'Загрузка...'}
      {status === STATUS_STORE.FAILED && error}
      {status === STATUS_STORE.SUCCEEDED && <h3>Albums:</h3>}
      {albums.map(({ id, userId, title }) => (
        <div key={id}>
          <span>{`Author id: ${userId}, title: ${title}`}</span>
        </div>
      ))}
    </div>
  );
});
