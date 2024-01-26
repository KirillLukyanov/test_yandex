import { router } from 'router';
import { RouterProvider as OriginalRouterProvider } from 'react-router-dom';

export const RouterProvider = () => (
  <OriginalRouterProvider router={router} />
);
