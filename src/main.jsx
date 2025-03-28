import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Log from './components/Log/Log.jsx';
import Register from './components/Register/Register.jsx';
import AuthProviders from './providers/Authproviders.jsx';
import Orders from './components/Orders/Orders.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
import Profile from './components/Profile/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Log></Log>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'orders',
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path: 'profile',
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>,
)
