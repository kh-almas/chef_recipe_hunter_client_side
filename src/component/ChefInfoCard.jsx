import React, {useEffect, useState} from 'react';
import {Button, Card} from "flowbite-react";
import ChefInfoCardSingleData from "./ChefInfoCardSingleData.jsx";

const ChefInfoCard = () => {
    const [chefs, setChefs] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data.chefs))
            .catch(error => {
                console.log(error.code);
            })
    },[])

    console.log(chefs);

    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-900 py-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            chefs?.map(chef => <ChefInfoCardSingleData chef={chef} key={chef.id}/>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChefInfoCard;