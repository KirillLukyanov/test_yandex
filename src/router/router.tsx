import { ReactElement, Suspense } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { App } from 'components';
import { ButtonPage, CounterPage, EffectPage } from 'pages';

export const enum ROUTER_PATHS {
    MAIN = '/',
    COUNTER = '/counter',
    EFFECT = '/effect',
    BUTTON = '/button',
}

type RouterPathsListItem = {
    path: ROUTER_PATHS,
    name: string
}

export const routerPathsList: RouterPathsListItem[] = [
  {
    path: ROUTER_PATHS.MAIN,
    name: 'Main',
  },
  {
    path: ROUTER_PATHS.COUNTER,
    name: 'Counter',
  },
  {
    path: ROUTER_PATHS.EFFECT,
    name: 'Effect',
  },
  {
    path: ROUTER_PATHS.BUTTON,
    name: 'Button',
  },
];

type RouteItem = {
    path: ROUTER_PATHS,
    element: ReactElement,
    children?: RouteItem[],
} & RouteObject

const routerProps: RouteItem[] = [
  {
    path: ROUTER_PATHS.MAIN,
    element: <App />,
    children: [
      {
        path: ROUTER_PATHS.COUNTER,
        element: <Suspense fallback="Загрузка..."><CounterPage /></Suspense>,
      },
      {
        path: ROUTER_PATHS.EFFECT,
        element: <Suspense fallback="Загрузка..."><EffectPage /></Suspense>,
      },
      {
        path: ROUTER_PATHS.BUTTON,
        element: <Suspense fallback="Загрузка..."><ButtonPage /></Suspense>,
      },
    ],
  },
];

export const router = createBrowserRouter(routerProps);
