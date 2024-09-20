import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home.jsx';
import App from './App.jsx';
import DetailAnime from './Pages/DetailAnime.jsx';

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
    <RouterProvider router={router} />
  </StrictMode>
);
