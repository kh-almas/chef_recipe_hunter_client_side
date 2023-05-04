import React, {useContext, useState} from 'react';
import {ThemeContext} from "../../provider/ThemeProvider.jsx";
import {AuthContext} from "../../provider/AuthProvider.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginWithEmailAndPassword = () => {
    const { darkMode } = useContext(ThemeContext);
    const { userLogin } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    function handleEmailChange(event) {
        setError('');
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setError('');
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setError('')
        if (name === '' || password === ''){
            setError('Input required');
            return;
        }
        userLogin(email, password)
            .then(userCredential => {
                // const user = userCredential.user;
                // redirect user
            })
            .catch(error => {
                const errorCode = error.code;
                setError(errorCode);
                setPassword('');
            });
        setEmail('');
        setPassword('');
        toast("Log in success");
    }

    const textColor = darkMode ? 'text-white ' : 'text-gray-700';
    const borderColor = darkMode ? 'border-gray-700 focus:border-gray-700' : 'border-gray-300 focus:border-gray-300';

    return (
        <form onSubmit={handleSubmit}>
            <ToastContainer />
            <small className="text-white">{ error }</small>
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
    );
};

export default LoginWithEmailAndPassword;