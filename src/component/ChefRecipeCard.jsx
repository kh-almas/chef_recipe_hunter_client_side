import React, { useState, useEffect } from 'react';
import ChefRecipeCardSingleData from "./ChefRecipeCardSingleData.jsx";
import {useParams} from "react-router-dom";

const ChefRecipeCard = () => {
    const [recipe, setRecipe] = useState();
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/chef/item/${id}`)
            .then(res => res.json())
            .then(data => setRecipe(data.recipes))
            .catch(error => {
                console.log(error.code);
            })
    },[])
    // console.log(recipe);
    return (
        <div>
            <div className="bg-gray-100 dark:bg-gray-900 py-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/*<ChefRecipeCardSingleData />*/}
                        {
                            recipe?.map(item => <ChefRecipeCardSingleData data={item} key={item.recipe_id}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipeCard;