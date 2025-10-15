import { createBrowserRouter } from "react-router";
import App from '../App';
import Home from '../pages/Home';
import ErrorPage from "../pages/ErrorPage";
import Login from "../auth/Login";
import Register from "../auth/Register";
import PrivateRoute from "../context/PrivateRoute";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";


const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: 'profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])


export { router };