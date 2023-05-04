import React, {useContext} from 'react';
import {ThemeContext} from "../../provider/ThemeProvider.jsx";

const partners = [
    {
        name: 'Partner 1',
        logo: 'https://flowbite.com/docs/images/blog/image-1.jpg',
        website: 'https://www.partner1.com/',
    },
    {
        name: 'Partner 2',
        logo: 'https://flowbite.com/docs/images/blog/image-1.jpg',
        website: 'https://www.partner2.com/',
    },
    {
        name: 'Partner 3',
        logo: 'https://flowbite.com/docs/images/blog/image-1.jpg',
        website: 'https://www.partner3.com/',
    },
    {
        name: 'Partner 3',
        logo: 'https://flowbite.com/docs/images/blog/image-1.jpg',
        website: 'https://www.partner3.com/',
    },
    {
        name: 'Partner 3',
        logo: 'https://flowbite.com/docs/images/blog/image-1.jpg',
        website: 'https://www.partner3.com/',
    },
    {
        name: 'Partner 3',
        logo: 'https://flowbite.com/docs/images/blog/image-1.jpg',
        website: 'https://www.partner3.com/',
    },
];

function Partner({ name, logo, website }) {
    return (
        <a href={website} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center p-4 border border-gray-300 rounded-md shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
            <img src={logo} alt={name} className="w-full object-contain" />
        </a>
    );
}

function PartnersSection() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`bg-${darkMode ? 'gray-900' : 'white'} text-${darkMode ? 'white' : 'gray-800'} transition duration-500 ease-in-out`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Our Partners</h2>

                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {partners.map((partner) => (
                        <Partner key={partner.name} name={partner.name} logo={partner.logo} website={partner.website} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PartnersSection;
