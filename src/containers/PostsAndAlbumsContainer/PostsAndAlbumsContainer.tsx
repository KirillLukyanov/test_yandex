import { memo } from 'react';
import { Albums, Posts } from 'components';
import { fetchAlbums, fetchPosts } from 'services';
import { useAppDispatch } from 'store';
import { Button } from 'ui';
import s from './PostsAndAlbumsContainer.module.css';

export const PostsAndAlbumsContainer = memo(() => {
  const dispatch = useAppDispatch();

  const loadPostsAndAlbums = () => {
    dispatch(fetchPosts());
    dispatch(fetchAlbums());
  };

  return (
    <div>
      <Button
        onClick={loadPostsAndAlbums}
      >
        Загрузить посты и альбомы
      </Button>
      <div className={s.content}>
        <Posts />
        <Albums />
      </div>

    </div>
  );
});
