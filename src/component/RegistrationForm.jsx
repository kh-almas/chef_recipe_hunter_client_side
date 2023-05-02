import React, { useState, useContext } from 'react';
import {Link} from "react-router-dom";
import {ThemeContext} from "../provider/ThemeProvider.jsx";
import RegisterWithEmailAndPassword from "./auth/RegisterWithEmailAndPassword.jsx";
import GoogleAuth from "./auth/GoogleAuth.jsx";
import GithubAuth from "./auth/GithubAuth.jsx";

const RegistrationForm = () => {
    const { darkMode } = useContext(ThemeContext);

    const textColor = darkMode ? 'text-white ' : 'text-gray-700';
    const bgColor = darkMode ? 'bg-gray-800' : 'bg-white';
    const mainBgColor = darkMode ? 'bg-gray-900' : 'bg-gray-100';
    const borderColor = darkMode ? 'border-gray-700 focus:border-gray-700' : 'border-gray-300 focus:border-gray-300';

    return (
        <div className={`flex justify-center items-center min-h-screen py-20 ${mainBgColor}`}>
            <div className={`w-full max-w-md p-8 rounded-lg shadow-lg ${bgColor}`}>
                <h1 className={`text-2xl font-semibold  mb-6 ${textColor}`}>Create an account</h1>





                <RegisterWithEmailAndPassword />


                <div className="flex mt-6">
                    <div className="w-full my-2 text-center">
                        <GoogleAuth />
                    </div>
                    <div className="text-gray-700 dark:text-gray-300 mx-2 py-5">Or</div>
                    <div className=" w-full my-2 text-center">
                        <GithubAuth />
                    </div>
                </div>
                <div className="flex justify-center items-center mt-6">
                    <span className={textColor}>Already have an account?</span>
                    <Link to={'/login'} className={`font-semibold py-2 px-4 rounded-lg ${textColor}`} type="button">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;