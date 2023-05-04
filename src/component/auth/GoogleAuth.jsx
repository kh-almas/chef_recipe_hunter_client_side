import React, {useContext} from 'react';
import {ThemeContext} from "../../provider/ThemeProvider.jsx";
import {AuthContext} from "../../provider/AuthProvider.jsx";

const GoogleAuth = () => {
    const { darkMode } = useContext(ThemeContext);
    const { googleAuth, updateUserProfile  } = useContext(AuthContext);
    const googleLogin = () => {
        googleAuth()
            .then(result => {
                const user = result.user;
                updateUserProfile(user , user.displayName, user.photoURL);
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
            });




    }

    const textColor = darkMode ? 'text-white ' : 'text-gray-700';
    const borderColor = darkMode ? 'border-gray-700 focus:border-gray-700' : 'border-gray-300 focus:border-gray-300';
    return (
        <>
            <button onClick={() => googleLogin()} className={`border font-semibold py-2 px-4 rounded-lg ${textColor} ${borderColor}`} type="button">
                Google
            </button>
        </>
    );
};

export default GoogleAuth;