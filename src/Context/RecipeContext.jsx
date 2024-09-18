import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RecipeContext = createContext();

export const useRecipeContext = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const getRecipe = async (input) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
            const result = await response.json();

            if (result && result.meals) {
                setRecipe(result);
                navigate('/recipe');
                setError(null);
            } else {
                setRecipe(null);
                setError("No Data Found");
            }
        } catch (error) {
            console.log(`ERROR while fetching: ${error}`);
            setError("An error occurred while fetching data");
        }
    };

    return (
        <RecipeContext.Provider value={{ recipe, setRecipe, error, getRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
};
