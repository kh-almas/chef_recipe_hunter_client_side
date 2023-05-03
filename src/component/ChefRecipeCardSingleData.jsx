import React, {useState} from 'react';
import {Button, Card} from "flowbite-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefRecipeCardSingleData = ({ data }) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const setFavourite = () => {
        toast("Item set in favourite");
        setIsDisabled(true);
    }
    return (
        <div>
            <ToastContainer />
            <div className="max-w-sm">
                <Card>
                    <h5 className="mb-3 text-base font-semibold text-gray-900 dark:text-white lg:text-xl">
                        {data?.recipe_name}
                    </h5>
                    <div>
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
                            <span>{ data?.rating } Rating</span>
                        </div>
                    </div>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        { data?.cooking_method }
                    </p>
                    <ul className="my-4 space-y-3">
                        <h4>Ingredients:</h4>
                        {
                            data?.ingredients?.map(item => <><li>
                                <div className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
                                    <span className="ml-3 flex-1 whitespace-nowrap">{ item }</span>
                                </div>
                            </li></>)
                        }

                    </ul>
                    <Button onClick={setFavourite} color="light" className="w-full" disabled={isDisabled}>
                        Set as favourite
                    </Button>
                </Card>
            </div>
        </div>
    );
};

export default ChefRecipeCardSingleData;