import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import Main from "../pages/Main.jsx";
import NotFound from "../pages/NotFound.jsx";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <NotFound />,
        children:[
            {
                path: '/',
                element: <HomePage />
            }
        ]

    }
]);

export default routes;