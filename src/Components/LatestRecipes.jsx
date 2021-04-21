import React, { useEffect, useState } from "react";
import "../ComponentCSS/LatestRecipes.css";
import RecipeCard from "./RecipeCard";
import axios from "axios";

function LatestRecipes() {
  const [randomRecipeData, setRandomRecipeData] = useState([
    {
      RCPname: "",
      RCPimg: "",
      RCPtype: "",
      RCPreadyIn: "",
      RCPservings: "",
      RCP_ID: "",
    },
  ]);
  const [dailyHighlights, setDailyHighlights] = useState();
  console.log(randomRecipeData);
  // useEffect(() => {
  //   const getRandomRecipeData = async () => {
  //     const response = await axios.get(
  //       "https://api.spoonacular.com/recipes/random?apiKey=49510ae643c54e1dbe96171df5c05662&number=5"
  //     );
  //     setRandomRecipeData(
  //       response.data.recipes.map((val) => {
  //         return {
  //           RCPname: val.title,
  //           RCPimg: val.image,
  //           RCPtype: val.vegan,
  //           RCPreadyIn: val.readyInMinutes,
  //           RCPservings: val.servings,
  //           RCP_ID: val.id,
  //         };
  //       })
  //     );
  //   };
  //   getRandomRecipeData();
  // }, []);
  return (
    <div className="recipeMainDiv">
      <h1>Latest Recipes</h1>
      <div className="recipeContainer">
        {randomRecipeData.map((val) => {
          return (
            <RecipeCard
              key={val.RCP_ID}
              name={`${val.RCPname}`}
              id={val.RCP_ID}
              type={val.RCPtype}
              readyIn={val.RCPreadyIn}
              servings={val.RCPservings}
            />
          );
        })}
      </div>
      <p className="recipesViewAll">View All</p>
    </div>
  );
}

export default LatestRecipes;
