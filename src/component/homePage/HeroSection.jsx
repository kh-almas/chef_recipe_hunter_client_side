import React, {useContext} from 'react';
import {ThemeContext} from "../../provider/ThemeProvider.jsx";

const HeroSection = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div
            className={`bg-center bg-cover min-h-screen ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
            style={{
                backgroundImage: `url(${darkMode ? "https://onaircode.com/wp-content/uploads/2019/08/strip-hero-template.png" : "https://onaircode.com/wp-content/uploads/2019/08/strip-hero-template.png"})`,
            }}
        >
            <div className="max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8 text-center">
                <h1
                    className={`text-4xl font-extrabold ${
                        darkMode ? "text-white" : "text-gray-900"
                    }`}
                >
                    Find a Recipe
                </h1>
                <div className="mt-8 flex justify-center flex-col items-center">
                    <form className="">
                        <div className="w sm:max-w-xs mb-4">
                            <label htmlFor="search" className="sr-only">
                                Search
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <input
                                    id="search"
                                    name="search"
                                    className="form-input block w-full pl-10 pr-3 py-2 rounded-md border-0 bg-white dark:bg-gray-700 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Search for recipes"
                                    type="search"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                                    <i className="fas fa-search text-gray-400"></i>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:max-w-xs mb-4">
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                    <div className="mt-3">
                        <button
                            type="button"
                            className="w-full sm:w-auto flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Advanced Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default HeroSection;