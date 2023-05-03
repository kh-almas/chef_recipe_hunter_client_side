import React, {useContext} from 'react';
import {AuthContext} from "../provider/AuthProvider.jsx";
import {Navigate} from "react-router-dom";
import {Spinner} from "flowbite-react";

const PrivateRoutes = ({ children }) => {
    const {user} = useContext(AuthContext);

    if (user)
    {
        return children;
    }

    return <Navigate to={'/login'} replace={true} />
};

export default PrivateRoutes;