import React from 'react';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from '../pages/Home';
import Singup from '../pages/Singup';
import Login from '../pages/Login';
import Cars from '../pages/Cars';
import Details from '../pages/Details';
import Checkout from '../pages/Checkout';
import About from '../pages/About';
import NotFound from '../pages/NotFound';



export default function Router() {

    const router = createBrowserRouter([
        { path: "/", element: <Home />, },
        { path: "/singup", element: <Singup />, },
        { path: "/login", element: <Login />, },
        { path: "/cars", element: <Cars />, },
        { path: "/det/:id", element: <Details />, },
        { path: "/checkout", element: <Checkout />, },
        { path: "/about", element: <About />, },
        { path: "/*", element: <NotFound />, },
    ])
    return (<RouterProvider router={router} />)
}