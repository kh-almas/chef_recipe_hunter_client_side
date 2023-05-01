import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {ThemeContext} from "../provider/ThemeProvider.jsx";

const LoginForm = () => {
    const { darkMode } = useContext(ThemeContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(`Email: ${email}`);
    }

    const textColor = darkMode ? 'text-white ' : 'text-gray-700';
    const bgColor = darkMode ? 'bg-gray-800' : 'bg-white';
    const mainBgColor = darkMode ? 'bg-gray-900' : 'bg-gray-100';
    const borderColor = darkMode ? 'border-gray-700 focus:border-gray-700' : 'border-gray-300 focus:border-gray-300';
    return (
        <>
            <div className={`flex justify-center items-center min-h-screen py-20 ${mainBgColor}`}>
                <div className={`w-full max-w-md p-8 rounded-lg shadow-lg ${bgColor}`}>
                    <h1 className={`text-2xl font-semibold  mb-6 ${textColor}`}>Login your account</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className={`block font-semibold mb-2 ${textColor}`} htmlFor="email">
                                Email
                            </label>
                            <input className={`w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 ${borderColor}`} id="email" type="email" value={email} onChange={handleEmailChange}/>
                        </div>
                        <div className="mb-6">
                            <label className={`block font-semibold mb-2 ${textColor}`} htmlFor="photoUrl">
                                Password
                            </label>
                            <input className={`w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 ${borderColor}`} id="password" type="password" value={password} onChange={handlePassword}/>
                        </div>
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                    <div className="flex mt-6">
                        <div className="w-full my-2 text-center">
                            <button className={`border font-semibold py-2 px-4 rounded-lg ${textColor} ${borderColor}`} type="button">
                                Google
                            </button>
                        </div>
                        <div className="text-gray-700 dark:text-gray-300 mx-2 py-5">Or</div>
                        <div className=" w-full my-2 text-center">
                            <button className={`border font-semibold py-2 px-4 rounded-lg ${textColor} ${borderColor}`} type="button">
                                Github
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <span className={textColor}>Don't have an account?</span>
                        <Link to={'/registration'} className={`font-semibold py-2 px-4 rounded-lg ${textColor}`} type="button">
                            Registration
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;