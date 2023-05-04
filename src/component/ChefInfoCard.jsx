import React, {useContext, useEffect, useState} from 'react';
import {Button, Card} from "flowbite-react";
import ChefInfoCardSingleData from "./ChefInfoCardSingleData.jsx";
import {AuthContext} from "../provider/AuthProvider.jsx";
import LazyLoad from 'react-lazyload';

const ChefInfoCard = () => {
    const [showMore, setShowMore] = useState(false);
    const [chefs, setChefs] = useState();
    const { setLoading } = useContext(AuthContext);
    console.log(showMore);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => {
                showMore ? setChefs(data.chefs) : setChefs(data.chefs.slice(0, 6));
            })
            .catch(error => {
                console.log(error.code);
            })
        setLoading(false);
    },[showMore])

    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-900 py-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            chefs?.map(chef => <LazyLoad height={200} once><ChefInfoCardSingleData chef={chef} key={chef.id}/></LazyLoad>)
                        }
                    </div>
                    <div className="flex justify-center mt-6">
                        <Button onClick={() => setShowMore(true)} color="purple">
                            See more
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChefInfoCard;