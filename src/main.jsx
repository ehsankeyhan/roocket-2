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

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <div className='background-image-main w-full h-full object-cover'></div>
      <Header />
        <div className='outlet max-w-[1280px] mx-auto h-40 bg-white p-20 '>
          <Outlet />
        </div>
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
