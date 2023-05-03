import React from 'react';
import {NavLink} from "react-router-dom";

const ActiveLink = ({ to, text }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "px-4 py-2 me-3 rounded-md text-white font-medium hidden md:block"
                    : "px-4 py-2 me-3 rounded-md bg-yellow-500 text-white font-medium hidden md:block"
            }>{text}
        </NavLink>
    );
};

export default ActiveLink;