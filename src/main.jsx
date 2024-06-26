import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Dashboard from './routes/Dashboard';
import Header from './layouts/header/Header';
import { Provider } from 'react-redux'
import { store } from './components/store/store';
import Articles from './routes/Articles';
import Login from './routes/Login';
import {AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './layouts/ProtectedRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <AuthProvider>
    <div className=' overflow-y-auto background-image-main object-cover'>
        <Header />      
        <div className='mx-auto min-h-screen md:max-w-[1100px] px-5 md:block flex md:justify-between justify-center pt-28 '>
          <Outlet />
        </div>
        <div className='w-full h-80 bg-white'></div>
    </div>
    </AuthProvider>,
    errorElement: <div>ERROR</div> ,

    children: [
      {
        path: "/",
        element:
        <ProtectedRoute>
          <Dashboard />
         </ProtectedRoute>
         ,
      },
      {
        path: "articles",
        element: 
        <ProtectedRoute>
          <Articles />
        </ProtectedRoute>
        ,
      },
      {
        path: "login",
        element: <Login />,
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
