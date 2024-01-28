import { ReactElement, Suspense } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { PostsAndAlbumsPage, CounterPage, UsersPage } from 'pages';
import { App } from 'app';

export const enum ROUTER_PATHS {
    COUNTER = '/',
    USERS = '/users',
    POSTS_AND_ALBUMS = '/postsAndAlbums',
}

type RouterPathsListItem = {
    path: ROUTER_PATHS,
    name: string
}

export const routerPathsList: RouterPathsListItem[] = [
  {
    path: ROUTER_PATHS.COUNTER,
    name: 'Счетчик',
  },
  {
    path: ROUTER_PATHS.USERS,
    name: 'Пользователи',
  },
  {
    path: ROUTER_PATHS.POSTS_AND_ALBUMS,
    name: 'Посты и альбомы',
  },
];

type RouteItem = {
    path?: ROUTER_PATHS,
    element: ReactElement,
    children?: RouteItem[],
} & RouteObject

const routerProps: RouteItem[] = [
  {
    element: <App />,
    children: [
      {
        path: ROUTER_PATHS.COUNTER,
        element: <Suspense fallback="Загрузка..."><CounterPage /></Suspense>,
      },
      {
        path: ROUTER_PATHS.USERS,
        element: <Suspense fallback="Загрузка..."><UsersPage /></Suspense>,
      },
      {
        path: ROUTER_PATHS.POSTS_AND_ALBUMS,
        element: <Suspense fallback="Загрузка..."><PostsAndAlbumsPage /></Suspense>,
      },
    ],
  },
];

export const router = createBrowserRouter(routerProps);
