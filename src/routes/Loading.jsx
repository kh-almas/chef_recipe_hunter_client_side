import React, {useContext} from 'react';
import {Spinner} from "flowbite-react";
import {AuthContext} from "../provider/AuthProvider.jsx";

const Loading = ({ children }) => {
    const { loading } = useContext(AuthContext);

    if(loading)
    {
        return <div className="text-center"><Spinner aria-label="Center-aligned spinner example" /></div>;
    }else {
        return children;
    }
};

export default Loading;