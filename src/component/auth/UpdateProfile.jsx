import React, {useContext, useState} from 'react';
import {ThemeContext} from "../../provider/ThemeProvider.jsx";
import {AuthContext} from "../../provider/AuthProvider.jsx";
import {Navigate} from "react-router-dom";

const UpdateProfile = () => {


    const { darkMode } = useContext(ThemeContext);
    const { updateUserProfile } = useContext(AuthContext);
    const { user } = useContext(AuthContext);


    const [name, setName] = useState('');
    const [nameError , setNameError] = useState('');

    const [photoUrl, setPhotoUrl] = useState('');
    const [photoUrlError , setPhotoUrlError] = useState('');


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



    function handleSubmit(event) {
        event.preventDefault();

        if(!user){
            return <Navigate to={'/login'} replace={true} />
        }

        if (name === ''){
            setNameError('Input required');
            return;
        }

        if (photoUrl === ''){
            setPhotoUrlError('Input required');
            return;
        }
        if(user){
            updateUserProfile(user , name, photoUrl);
        }

        setName('');
        setPhotoUrl('');



    }



    const textColor = darkMode ? 'text-white ' : 'text-gray-700';
    const bgColor = darkMode ? 'bg-gray-800' : 'bg-white';
    const mainBgColor = darkMode ? 'bg-gray-900' : 'bg-gray-100';
    const borderColor = darkMode ? 'border-gray-700 focus:border-gray-700' : 'border-gray-300 focus:border-gray-300';

    return (
        <div className={`flex justify-center items-center min-h-screen py-20 ${mainBgColor}`}>
            <div className={`w-full max-w-md p-8 rounded-lg shadow-lg ${bgColor}`}>
                <h1 className={`text-2xl font-semibold  mb-6 ${textColor}`}>Update your profile</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className={`block font-semibold mb-2 ${textColor}`} htmlFor="name">
                            Name
                        </label>
                        <input className={`w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 ${borderColor}`} id="name" type="text" value={name} onChange={handleNameChange}/>
                        <small className="text-white">{ nameError }</small>
                    </div>
                    <div className="mb-6">
                        <label className={`block font-semibold mb-2 ${textColor}`} htmlFor="photoUrl">
                            Photo URL
                        </label>
                        <input className={`w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 ${borderColor}`} id="photoUrl" type="text" value={photoUrl} onChange={handlePhotoUrlChange}/>
                        <small className="text-white">{ photoUrlError }</small>
                    </div>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100" type="submit">
                        Update profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;