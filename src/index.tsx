import { createRoot } from 'react-dom/client';
import { RouterProvider, StoreProvider } from 'providers';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

container.render(
  <StoreProvider>
    <RouterProvider />
  </StoreProvider>,
);
