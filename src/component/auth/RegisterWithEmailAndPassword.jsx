import React, { useState, useContext } from 'react';
import {ThemeContext} from "../../provider/ThemeProvider.jsx";
import {AuthContext} from "../../provider/AuthProvider.jsx";
import { updateProfile } from "firebase/auth";

const RegisterWithEmailAndPassword = () => {

    const { darkMode } = useContext(ThemeContext);
    const { registerUser, updateUserProfile } = useContext(AuthContext);


    const [name, setName] = useState('');
    const [nameError , setNameError] = useState('');

    const [email, setEmail] = useState('');
    const [emailError , setEmailError] = useState('');

    const [photoUrl, setPhotoUrl] = useState('');
    const [photoUrlError , setPhotoUrlError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError , setPasswordError] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError , setConfirmPasswordError] = useState('');


    function handleNameChange(event) {
        const nameValue = event.target.value;
        setNameError('');
        setName(nameValue);

        if(nameValue.length <1)
        {
            setNameError("Enter a name");
        }

        if(nameValue !== ''){
            if(nameValue.length >20)
            {
                setNameError("Name can't be more then 20 characters");
            }

            if (/(?=.*[-._!"`'#%&,:;<>=@{}~])/.test(nameValue))
            {
                setNameError("Don't use special characters in name");
            }
        }
    }

    function handleEmailChange(event) {
        const emailValue = event.target.value;
        setEmailError('');
        setEmail(emailValue);

        if(emailValue.length <1)
        {
            setNameError("Enter a email");
        }

        if(emailValue !== ''){
            if(emailValue.length >100)
            {
                setNameError("Email can't be more then 100 characters");
            }
            if (!/(?=.*[@].*[.])/.test(emailValue))
            {
                setEmailError("You have entered an invalid email address!");
            }
        }
    }

    function handlePhotoUrlChange(event) {
        const photoUrlValue = event.target.value;
        setPhotoUrlError('');
        setPhotoUrl(photoUrlValue);

        if(photoUrlValue.length <1)
        {
            setPhotoUrlError("Enter a profile image url");
        }

        if(photoUrlValue !== ''){
            if(photoUrlValue.length > 500)
            {
                setPhotoUrlError("profile image url can't be more then 500 characters");
            }

            if(!/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(photoUrlValue)) {
                setPhotoUrlError("You have entered an invalid URL!");
            }
        }
    }

    function handlePassword(event) {
        const passwordValue = event.target.value;
        setPasswordError('');
        setPassword(passwordValue);

        if(passwordValue.length < 8)
        {
            setPasswordError("Password should minimum 8 character");
        }

        if(passwordValue !== ''){
            if(passwordValue.length > 255)
            {
                setPasswordError("Email can't be more then 100 characters");
            }
            if (!/(?=.*[-._!"`'#%&,:;<>=@{}~].*[0-9])/.test(passwordValue))
            {
                setPasswordError("Password should contain one special characters and one number");
            }
        }
    }

    function handleConfirmPassword(event) {
        const confirmPasswordValue = event.target.value;
        setConfirmPassword(confirmPasswordValue);
        setConfirmPasswordError('');
        if(password !== confirmPasswordValue)
        {
            setConfirmPasswordError("Password doesn't match");
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (name === ''){
            setNameError('Input required');
            return;
        }

        if (email === ''){
            setEmailError('Input required');
            return;
        }

        if (photoUrl === ''){
            setPhotoUrlError('Input required');
            return;
        }

        if (password === ''){
            setPasswordError('Input required');
            return;
        }

        if (confirmPassword === ''){
            setConfirmPasswordError('Input required');
            return;
        }

        registerUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateUserProfile(user , name, photoUrl);
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
            });
    }



    const textColor = darkMode ? 'text-white ' : 'text-gray-700';
    const borderColor = darkMode ? 'border-gray-700 focus:border-gray-700' : 'border-gray-300 focus:border-gray-300';

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className={`block font-semibold mb-2 ${textColor}`} htmlFor="name">
                    Name
                </label>
                <input className={`w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 ${borderColor}`} id="name" type="text" value={name} onChange={handleNameChange}/>
                <small className="text-white">{ nameError }</small>
            </div>
            <div className="mb-4">
                <label className={`block font-semibold mb-2 ${textColor}`} htmlFor="email">
                    Email
                </label>
                <input className={`w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 ${borderColor}`} id="email" type="email" value={email} onChange={handleEmailChange}/>
                <small className="text-white">{ emailError }</small>
            </div>
            <div className="mb-6">
                <label className={`block font-semibold mb-2 ${textColor}`} htmlFor="photoUrl">
                    Photo URL
                </label>
                <input className={`w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 ${borderColor}`} id="photoUrl" type="text" value={photoUrl} onChange={handlePhotoUrlChange}/>
                <small className="text-white">{ photoUrlError }</small>
            </div>
            <div className="mb-6">
                <label className={`block font-semibold mb-2 ${textColor}`} htmlFor="photoUrl">
                    Password
                </label>
                <input className={`w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 ${borderColor}`} id="password" type="password" value={password} onChange={handlePassword}/>
                <small className="text-white">{ passwordError }</small>
            </div>
            <div className="mb-6">
                <label className={`block font-semibold mb-2 ${textColor}`} htmlFor="photoUrl">
                    Confirm Password
                </label>
                <input className={`w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 ${borderColor}`} id="confirmPassword" type="password" value={confirmPassword} onChange={handleConfirmPassword}/>
                <small className="text-white">{ confirmPasswordError }</small>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100" type="submit">
                Sign Up
            </button>
        </form>
    );
};

export default RegisterWithEmailAndPassword;