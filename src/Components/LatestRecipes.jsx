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
        {randomRecipeData.map((val, index) => {
          return (
            <RecipeCard
              key={index}
              name={`${val.RCPname}`}
              img={val.RCPimg}
              type={val.RCPtype}
            />
          );
        })}
      </div>
      <p className="recipesViewAll">View All</p>
    </div>
  );
}

export default LatestRecipes;
