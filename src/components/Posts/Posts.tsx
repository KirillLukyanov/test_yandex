import { memo } from 'react';
import { useSelector } from 'react-redux';
import { STATUS_STORE } from 'store/StatusStore';
import { getPostsError, getPostsList, getPostsStatus } from './model/selectors';
import s from './Posts.module.css';

export const Posts = memo(() => {
  const posts = useSelector(getPostsList);
  const status = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  return (
    <div className={s.posts}>
      {status === STATUS_STORE.LOADING && 'Загрузка...'}
      {status === STATUS_STORE.FAILED && error}
      {status === STATUS_STORE.SUCCEEDED && (
        <>
          <h3>Посты:</h3>
          {posts.map(({ id, userId, title }) => (
            <div key={id}>
              <span>{`Author id: ${userId}, title: ${title}`}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
});
