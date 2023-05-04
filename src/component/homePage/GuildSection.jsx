import React, {useContext, useState} from 'react';
import {ThemeContext} from "../../provider/ThemeProvider.jsx";

const GuildSection = () => {
    const { darkMode } = useContext(ThemeContext);
    const [cards, setCards] = useState([
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam eget dolor gravida bibendum. Mauris sagittis dolor vitae turpis hendrerit, sit amet consequat lorem volutpat.",
            image:
                "https://flowbite.com/docs/images/blog/image-1.jpg",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam eget dolor gravida bibendum. Mauris sagittis dolor vitae turpis hendrerit, sit amet consequat lorem volutpat.",
            image:
                "https://flowbite.com/docs/images/blog/image-1.jpg",
        },
    ]);
    return (
        <div
            className={`bg-center bg-cover ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
        >
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
                <div className="lg:w-1/2 lg:pr-12">
                    <h2
                        className={`text-3xl font-extrabold mb-4 ${
                            darkMode ? "text-white" : "text-gray-900"
                        }`}
                    >
                        Section Title
                    </h2>
                    <p className={`mb-4 ${
                        darkMode ? "text-white" : "text-gray-900"
                    }`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                        diam eget dolor gravida bibendum. Mauris sagittis dolor vitae
                        turpis hendrerit, sit amet consequat lorem volutpat.
                    </p>
                    <button
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                    >
                        Call to Action
                    </button>
                </div>
                <div className="lg:w-1/2 mt-10 lg:mt-0">
                    <div className="grid grid-cols-2 gap-4">
                        {cards.map((card) => (
                            <div key={card.id} className="bg-white p-4 rounded-lg shadow-md">
                                <img
                                    className="w-full h-32 object-cover rounded-md"
                                    src={card.image}
                                    alt={card.title}
                                />
                                <h3 className="text-lg font-medium mt-4">{card.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuildSection;