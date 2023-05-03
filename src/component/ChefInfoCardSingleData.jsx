import React from 'react';
import {Button, Card} from "flowbite-react";
import {Link} from "react-router-dom";

const ChefInfoCardSingleData = ({ chef }) => {
    const {id, image_url, name, years_of_experience, num_recipes, likes, bio} = chef;
    console.log(id);
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={image_url}
                className="h-full"
            >
                <h5 className="mb-3 text-base font-semibold text-gray-900 dark:text-white lg:text-xl">
                    { name }
                </h5>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {bio.length < 120 ? <>{bio}</> :
                        <>{bio.slice(0, 120)}... </>
                    }
                </p>
                <ul className="my-4 space-y-3">
                    <li>
                        <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
                            <p className="ml-3 whitespace-nowrap">Experience</p>
                            <p className="ml-3 whitespace-nowrap">{ years_of_experience } years</p>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
                            <p className="ml-3 whitespace-nowrap">Recipes</p>
                            <p className="ml-3 whitespace-nowrap">{ num_recipes } items</p>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
                            <p className="ml-3 whitespace-nowrap">Loved by</p>
                            <p className="ml-3 whitespace-nowrap">{ likes } persons</p>
                        </div>
                    </li>
                </ul>
                <div>

                    <Link to={`/chef/recipe/${id}`}>
                        <Button color="light" className="w-full">
                            View Recipes
                        </Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default ChefInfoCardSingleData;