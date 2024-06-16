import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './pages/auth/LoginForm.jsx';
import RegisterForm from './pages/auth/RegisterForm.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Page404 from './pages/Page404.jsx';
const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  {
    path: "/login",
    element: <LoginForm />
  },
  {
    path: "/register",
    element: <RegisterForm />
  },
  {
    path: "*",
    element: <Page404 />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
