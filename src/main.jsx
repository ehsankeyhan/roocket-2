import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Dashboard from './routes/dashboard';
import ManageArticles from './routes/manageArticles';
import Header from './components/layouts/header/header';
import { Provider } from 'react-redux'
import { store } from './components/store/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div className=' overflow-y-auto background-image-main object-cover'>
      <Header />
        <div className='outlet min-h-screen  md:max-w-[1000px] md:block flex md:justify-between justify-center pt-28 '>
          <Outlet />
        </div>
        <div className='w-full h-80 bg-white'></div>
    </div>,
    errorElement: <div>ERROR</div> ,

    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "manageArticles",
        element: <ManageArticles />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)