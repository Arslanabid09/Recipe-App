import React, { useState } from "react";
import Img from "./assets/img1.jpg"; // Import image directly
import { useRecipeContext } from "./Context/RecipeContext";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const { getRecipe } = useRecipeContext();

  const handleSearch = async () => {
    try {
      const res = await getRecipe(input); 
      setInput("");
        } catch (error) {
      console.error("Error fetching recipe:", error); // Error handling
    }
  };

  return (
    <section className="relative flex flex-col justify-center items-center h-screen">
      <div className="absolute inset-0 z-[-1]">
        <img
          className="object-cover w-full h-full blur-[4px]"
          src={`.${Img}`} // Use Img directly
          alt="Background Image"
        />
      </div>

      <div className="w-11/12 md:w-2/3 lg:w-1/2 bg-yellow-400/45 shadow-2xl rounded-lg h-96">
        <div className="flex items-center h-full py-5 w-full px-3">
          <input
            type="text"
            className="mx-2 font-semibold text-lg w-full md:w-11/12 bg-transparent text-white outline-none border-b-4 border-white"
            placeholder="Search..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            className="text-white font-bold border-4 border-white px-10 py-3 rounded-full hover:bg-amber-400 hover:scale-105 duration-200"
            onClick={handleSearch} // Call handleSearch on click
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
