import React from "react";
import { useRecipeContext } from "./Context/RecipeContext";

const Recipe = () => {
    const { recipe, error } = useRecipeContext();

    const meal = recipe?.meals?.[0]; 

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    if (!meal) {
        return <div className="text-gray-500">No recipe data available</div>;
    }

    return (
        <div className="min-h-screen items-center flex-col bg-gray-100 p-6 flex">
                <button className="text-black my-5 font-bold border-4 border-black px-10 py-3 rounded-full hover:bg-amber-400 hover:scale-105 duration-200" onClick={() => window.history.back()}>go back</button>
        
            <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                {/* Left side: Recipe Image */}
                <div className="md:w-1/2">
                    <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right side: Ingredients and Instructions */}
                <div className="md:w-1/2 p-6 flex flex-col">
                    {/* Ingredients */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            {Array.from({ length: 20 }).map((_, index) => {
                                const ingredient = meal[`strIngredient${index + 1}`];
                                const measure = meal[`strMeasure${index + 1}`];
                                return ingredient && measure ? (
                                    <li key={index}>
                                        {measure} {ingredient}
                                    </li>
                                ) : null;
                            })}
                        </ul>
                    </div>

                    {/* Instructions */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
                        <p className="text-gray-600">{meal.strInstructions}</p>
                    </div>
                </div>
            </div>

            {/* Recipe Video */}
            {meal.strYoutube && (
                <div className="mt-16 w-4/5">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Recipe Video</h2>
                    <div>
                        <iframe
                            className="w-full h-96"
                            src={`https://www.youtube.com/embed/${new URL(meal.strYoutube).searchParams.get('v')}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Recipe;
