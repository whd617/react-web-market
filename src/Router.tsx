import { createBrowserRouter } from 'react-router-dom';
import About from './screens/About';
import Root from './Root';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import ErrorComponent from './components/ErrorComponent';
import User from './screens/users/User';
import Followers from './screens/users/Followers';

const router = createBrowserRouter([
  {
    // "부모"역할인 Root
    path: '/',
    element: <Root />,
    children: [
      // 자식역할을 하는 API 나열
      {
        path: '',
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: 'about',
        element: <About />,
      },
      // dynamic parameter를 이용한 path이동
      {
        path: 'users/:userId',
        element: <User />,
        children: [
          {
            path: 'followers',
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
