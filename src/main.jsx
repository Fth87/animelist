import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home.jsx';
import App from './App.jsx';
import DetailAnime from './Pages/detailAnime.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/detail/:mal_id',
    element: <DetailAnime />,
  },
  {
    path: '/app',
    element: <App />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router={router} />
    {/* </Provider> */}
  </StrictMode>
);
