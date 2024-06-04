import { createBrowserRouter } from 'react-router-dom';
import About from './screens/About';
import Root from './Root';
import Home from './screens/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);

export default router;
