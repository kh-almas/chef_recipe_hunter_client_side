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
import UpdateProfile from "../component/auth/UpdateProfile.jsx";
import FavoriteRecipes from "../pages/FavoriteRecipes.jsx";

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
                path: '/update/profile',
                element: <UpdateProfile />
            },
            {
                path: '/chef/recipe/:id',
                element: <PrivateRoutes><ChefRecipe /></PrivateRoutes>
            },
            {
                path: '/favorite/recipes',
                element: <PrivateRoutes><FavoriteRecipes /></PrivateRoutes>,
                loader: () => fetch('https://the-plate-escap-server.vercel.app/recipes'),
            },
            {
                path: '/blog',
                element: <Blog />,
            }
        ]

    }
]);

export default routes;