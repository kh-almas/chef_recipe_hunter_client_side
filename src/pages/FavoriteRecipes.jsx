import React, {useState, useEffect} from 'react';
import {useLoaderData} from "react-router-dom";
import FavoriteRecipesTable from "../component/fevouriteRecipes/FavoriteRecipesTable.jsx";

const FavoriteRecipes = () => {
    let dataStorage = [];
    const [data, setData] = useState([]);
    const [isChanged, setIsChanged] = useState(false)
    const { all_recipes } = useLoaderData();
    useEffect(() => {
        const storeData = JSON.parse(localStorage.getItem('favourite_recipes'));
        storeData?.map(id => {
            const findData = all_recipes?.find(data => parseInt(id) === parseInt(data.recipe_id));
            dataStorage.push(findData);
        })
        setData(dataStorage);

    }, [isChanged]);

    const lookChange = () => setIsChanged(!isChanged);

    return (
        <div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chef</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipe</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remove</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {data.map(item => <FavoriteRecipesTable recipe={item} lookChange={lookChange}></FavoriteRecipesTable>)}
                </tbody>
            </table>
        </div>
    );
};

export default FavoriteRecipes;