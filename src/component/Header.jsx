import React, {useContext, useState} from 'react';
import { FiSun, FiMoon, FiUser } from 'react-icons/fi';
import {Link} from "react-router-dom";
import {ThemeContext} from "../provider/ThemeProvider.jsx";
import {AuthContext} from "../provider/AuthProvider.jsx";
import {Tooltip} from "flowbite-react";

function Header() {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);
    const { user, logOut } = useContext(AuthContext);

    const userLogout = () => {
        logOut()
            .then(() => {})
            .catch((error) => {
                const code = error.code;
                console.log(code);
            })
    }



    return (
        <header className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <h1 className="text-2xl font-bold">The Plate Escape</h1>
                <div className="flex">
                    <Link to={'/'} className="px-4 py-2 me-3 rounded-md bg-yellow-500 text-white font-medium hidden md:block">Home</Link>
                    <Link to={'/blog'} className="px-4 py-2 me-3 rounded-md bg-yellow-500 text-white font-medium hidden md:block">Blog</Link>
                    <Link to={'/'} className="px-4 py-2 me-3 rounded-md bg-yellow-500 text-white font-medium hidden md:block">Contact</Link>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="md:hidden">
                        <button className="p-2 rounded-md bg-yellow-500 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
                        </button>
                    </div>
                    <div className="flex items-center space-x-2 ml-auto">
                        {user ? (
                            <div className="flex items-center space-x-2">
                                <Tooltip content={user?.displayName}>
                                    <img src={user?.photoURL} alt="Profile" className="w-8 h-8 rounded-full" data-tooltip-target="tooltip-default"/>
                                </Tooltip>

                                <button onClick={() => userLogout()} className="px-4 py-2 rounded-md bg-yellow-500 text-white font-medium">Logout</button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-2">
                                <Link to={'/login'} className="px-4 py-2 rounded-md bg-yellow-500 text-white font-medium">Login</Link>
                                <Link to={'/registration'} className="px-4 py-2 rounded-md bg-yellow-500 text-white font-medium">Register</Link>
                            </div>
                        )}
                        <div className="flex items-center">
                            <button
                                className={`${darkMode ? 'bg-yellow-500' : 'bg-gray-200'} flex items-center justify-center rounded-md w-10 h-10`}
                                onClick={() => toggleDarkMode(!darkMode)}
                            >
                                {darkMode ? <FiMoon size={20} color="#FFF" /> : <FiSun size={20} color="#000" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-4 px-6 md:hidden">
                <Link to={'/'} className="px-4 py-2 rounded-md bg-yellow-500 text-white font-medium w-full">Home</Link>
                <Link to={'/blog'} className="px-4 py-2 rounded-md bg-yellow-500 text-white font-medium w-full mt-2">Blog</Link>
                <Link to={'/'} className="px-4 py-2 rounded-md bg-yellow-500 text-white font-medium w-full mt-2">Contact</Link>
            </div>
        </header>
    );

}

export default Header;
