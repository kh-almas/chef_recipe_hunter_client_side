import React, {useContext} from 'react';
import {ThemeContext} from "../../provider/ThemeProvider.jsx";
import {AuthContext} from "../../provider/AuthProvider.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GithubAuth = () => {
    const { darkMode } = useContext(ThemeContext);
    const { githubAuth, updateUserProfile  } = useContext(AuthContext);
    const githubLogin = () => {
        githubAuth()
            .then(result => {
                const user = result.user;
                updateUserProfile(user , user.displayName, user.photoURL);
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
            });
        toast("Login with Github is done");
    }

    const textColor = darkMode ? 'text-white ' : 'text-gray-700';
    const borderColor = darkMode ? 'border-gray-700 focus:border-gray-700' : 'border-gray-300 focus:border-gray-300';
    return (
        <>
            <ToastContainer />
            <button onClick={() => githubLogin()} className={`border font-semibold py-2 px-4 rounded-lg ${textColor} ${borderColor}`} type="button">
                Github
            </button>
        </>
    );
};

export default GithubAuth;