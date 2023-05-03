import React from 'react';
import ChefDetailsInChefRecipe from "../component/ChefDetailsInChefRecipe.jsx";
import ChefRecipeCard from "../component/ChefRecipeCard.jsx";

const ChefRecipe = () => {
    return (
        <div>
            <ChefDetailsInChefRecipe />
            <ChefRecipeCard />
        </div>
    );
};

export default ChefRecipe;