import React from 'react';
import FavoriteRecipes from "../../pages/FavoriteRecipes.jsx";
import {toast} from "react-toastify";

const FavoriteRecipesTable = ({recipe, lookChange}) => {
    const handleRemove = id => {
        // console.log(id);

        let item = [];
        const getStorageItem = JSON.parse(localStorage.getItem('favourite_recipes'));
        if(getStorageItem)
        {
            item = [...getStorageItem];
        }

        const newItem = item.filter(itemId => parseInt(id) !== parseInt(itemId))
        // if(item.includes(id))
        // {
        //     toast("Already saved!");
        //     return;
        // }
        // item.push(id);
        localStorage.setItem('favourite_recipes', JSON.stringify(newItem));
        // toast("Item set in favourite");
        // console.log(newItem);
        lookChange();
    }
    return (
        <>
            <tr key={recipe.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                    <img src={recipe?.image} alt={recipe?.recipe_name} className="h-12 w-12 rounded-full" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{recipe?.chef_id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{recipe?.recipe_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <button onClick={() => handleRemove(recipe?.recipe_id)} className="text-red-500 hover:text-red-700 font-medium">
                        Remove
                    </button>
                </td>
            </tr>
        </>
    );
};

export default FavoriteRecipesTable;