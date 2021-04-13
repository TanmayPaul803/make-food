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
  useEffect(() => {
    const getRandomRecipeData = async () => {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/random?apiKey=1a9b8c803ccf4b57a34259e418add293&number=5"
      );
      setRandomRecipeData(
        response.data.recipes.map((val) => {
          return {
            RCPname: val.title,
            RCPimg: val.image,
            RCPtype: val.vegan,
            RCPreadyIn: val.readyInMinutes,
            RCPservings: val.servings,
            RCP_ID: val.id,
          };
        })
      );
    };
    getRandomRecipeData();
  }, []);
  return (
    <div className="recipeMainDiv">
      <h1>Latest Recipes</h1>
      <div className="recipeContainer">
        {randomRecipeData.map((val) => {
          return (
            <RecipeCard
              key={val.RCP_ID}
              name={`${val.RCPname}`}
              img={val.RCPimg}
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
