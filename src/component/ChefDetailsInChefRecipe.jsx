import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import LazyLoad from "react-lazyload";

const ChefDetailsInChefRecipe = () => {
    const [chefs, setChefs] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://the-plate-escap-server.vercel.app/chef/${id}`)
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => {
                console.log(error.code);
            })
    },[])
    const chefImage = 'https://flowbite.com/docs/images/blog/image-4.jpg';

    return (
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${chefImage})` }}
        >
            <div className="bg-white bg-opacity-80 p-8 rounded-md shadow-md w-1/2">
                <div className="flex items-center mb-4">
                    <LazyLoad height={200} once>
                        <img src={ chefs?.image_url } alt="Chef" className="rounded-full h-24 w-24 object-cover mr-4" />
                    </LazyLoad>
                    <div>
                        <h1 className="text-3xl font-bold">{ chefs?.name }</h1>
                    </div>
                </div>
                <div className="text-gray-700">
                    <p className="mb-2">
                        {chefs?.bio}
                    </p>
                    <div className="flex mb-2">
                        <svg
                            className="w-6 h-6 mr-2 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span>{ chefs?.likes } Likes</span>
                    </div>
                    <div className="flex mb-2">
                        <svg
                            className="w-6 h-6 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span>{ chefs?.num_recipes } Recipes</span>
                    </div>
                    <div className="flex">
                        <svg
                            className="w-6 h-6 mr-2 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span>{ chefs?.years_of_experience } Years of Experience</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefDetailsInChefRecipe;