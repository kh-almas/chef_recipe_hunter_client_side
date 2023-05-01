import React, { useState } from 'react';

const Footer = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [email, setEmail] = useState('');

    function toggleDarkMode() {
        setIsDarkMode(!isDarkMode);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(`Subscribing email: ${email}`);
        setEmail('');
    }

    const textColor = isDarkMode ? 'text-white' : 'text-gray-800';
    const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
    const borderColor = isDarkMode ? 'border-white' : 'border-gray-300';
    const logoSrc = isDarkMode ? '/logo-dark.png' : '/logo-light.png';

    return (
        <>
            <footer className={`py-8 px-12 ${bgColor}`}>
                <div className="container flex flex-col lg:flex-row justify-center items-center">
                    <div className="text-center lg:text-left w-1/3">
                        <h2 className={`text-2xl font-bold ${textColor}`}>The Plate Escape</h2>
                        <p className={`text-sm mt-2 ${textColor}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-8 w-1/3 text-center">
                        <div>
                            <button className={`px-4 py-2 ${bgColor} ${borderColor} ${textColor} hover:bg-gray-200 hover:text-gray-800 transition duration-300 ease-in-out mr-4`}>Button 1</button>
                        </div>
                        <div>
                            <button className={`px-4 py-2 ${bgColor} ${borderColor} ${textColor} hover:bg-gray-200 hover:text-gray-800 transition duration-300 ease-in-out mr-4`}>Button 2</button>
                        </div>
                        <div>
                            <button className={`px-4 py-2 ${bgColor} ${borderColor} ${textColor} hover:bg-gray-200 hover:text-gray-800 transition duration-300 ease-in-out  mr-4`}>Button 3</button>
                        </div>
                        <div>
                            <button className={`px-4 py-2 ${bgColor} ${borderColor} ${textColor} hover:bg-gray-200 hover:text-gray-800 transition duration-300 ease-in-out  mr-4`}>Button 3</button>
                        </div>
                        <div>
                            <button className={`px-4 py-2 ${bgColor} ${borderColor} ${textColor} hover:bg-gray-200 hover:text-gray-800 transition duration-300 ease-in-out  mr-4`}>Button 3</button>
                        </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-auto flex flex-col items-center lg:items-end w-1/3">
                        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-center">
                            <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" className={`border rounded-l px-4 py-2 w-full lg:w-64 focus:outline-none ${bgColor} ${borderColor} ${textColor}`} />
                            <button type="submit" className={`px-4 py-2 rounded-r ${bgColor} ${borderColor} ${textColor} hover:bg-gray-200 hover:text-gray-800 transition duration-300 ease-in-out mt-4 lg:mt-0`}>Subscribe</button>
                        </form>

                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;