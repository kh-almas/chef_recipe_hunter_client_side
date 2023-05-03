import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import Main from "../pages/Main.jsx";
import NotFound from "../pages/NotFound.jsx";
import RegistrationForm from "../component/RegistrationForm.jsx";
import LoginForm from "../component/LoginForm.jsx";
import ChefRecipe from "../pages/ChefRecipe.jsx";
import Blog from "../pages/Blog.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <NotFound />,
        children:[
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/registration',
                element: <RegistrationForm />
            },
            {
                path: '/login',
                element: <LoginForm />
            },
            {
                path: '/chef/recipe/:id',
                element: <PrivateRoutes><ChefRecipe /></PrivateRoutes>,
            },
            {
                path: '/blog',
                element: <Blog />,
            }
        ]

    }
]);

export default routes;