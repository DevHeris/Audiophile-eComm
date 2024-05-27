import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

import Headphones from './features/category/headphones/Headphones';
import Earphones from './features/category/earphones/Earphones';
import Speakers from './features/category/speakers/Speakers';
import Product from './features/product/Product';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/category/headphones', element: <Headphones /> },
      { path: '/category/earphones', element: <Earphones /> },
      { path: '/category/speakers', element: <Speakers /> },
      { path: '/category/product/:productSlug', element: <Product /> },
      { path: '/checkout', element: <Product /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
