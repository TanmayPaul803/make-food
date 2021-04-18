import React, { useEffect, useState } from "react";
import backImg from "../rcpBackImg.png";
import { Select, MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import RecipeCard from "./RecipeCard";
import axios from "axios";
import SearchCard from "./SearchCard";
const Recipes = () => {
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");
  const [type, setType] = useState("");
  const [intolerance, setIntolerance] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [includeIngdredient, setIncludeIngdredient] = useState("");

  const [recipeData, setRecipeData] = useState([]);
  const [formSubmitTriggred, setFormSubmitTriggred] = useState(false);
  console.log(recipeData);

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await axios.get(
  //       `https://api.spoonacular.com/recipes/complexSearch?query=${nameInput}&number=2&apiKey=1a9b8c803ccf4b57a34259e418add293&cuisine=${cuisine}&diet=${diet}&includeIngredients={includeIngdredient}&type={type}&intolerances={intolerance}`
  //     );
  //     setRecipeData(response.data);
  //   };
  //   getData();
  // }, []);
  return (
    <div className="recipes">
      <div className="hero">
        <img src={backImg} alt="" />
        <h1>Welcome to Recipes</h1>
      </div>
      {/* ///////         User Selection          ////////// */}
      <div className="Rcp_content">
        {/* ------------Name Input--------------  */}
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            const getdata = async () => {
              const response = await axios.get(
                `https://api.spoonacular.com/recipes/complexSearch?query=${nameInput}&apiKey=1a9b8c803ccf4b57a34259e418add293&cuisine=${cuisine}&diet=${diet}&includeIngredients=${includeIngdredient}&type=${type}&intolerances=${intolerance}`
              );
              setRecipeData(response.data.results);
            };
            getdata();
          }}
        >
          <div>
            <p>Name of the Recipe</p>
            <TextField
              id="filled-basic"
              label="Enter here"
              variant="filled"
              onChange={(e) => {
                setNameInput(e.target.value);
              }}
              val={nameInput}
              // onKeyPress={(e) => {
              //   if (e.key === "Enter") {
              //     setSearch(input);
              //   }
              // }}
            />
          </div>

          <div>
            <p>Cuisine</p>
            <Select
              value={cuisine}
              onChange={(e) => {
                setCuisine(e.target.value);
              }}
              id="filled-basic"
              label="Filled"
              variant="filled"
              displayEmpty
            >
              <MenuItem value="Indian">Indian</MenuItem>
              <MenuItem value="American">American</MenuItem>
              <MenuItem value="Chinese">Chinese</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
            </Select>
          </div>
          <div>
            <p>Diet</p>
            <Select
              value={diet}
              onChange={(e) => {
                setDiet(e.target.value);
              }}
              id="filled-basic"
              label="Filled"
              variant="filled"
            >
              <MenuItem value="Vegan">Vegan</MenuItem>
              <MenuItem value="Gluten Free">Gluten Free</MenuItem>
              <MenuItem value="Vegetarian">Vegetarian</MenuItem>
              <MenuItem value="omnivore">omnivore</MenuItem>
            </Select>
          </div>
          <div>
            <p>Include Ingredients</p>
            <TextField
              id="filled-basic"
              label="Enter here"
              variant="filled"
              onChange={(e) => {
                setIncludeIngdredient(e.target.value);
              }}
              val={includeIngdredient}
              // onKeyPress={(e) => {
              //   if (e.key === "Enter") {
              //     setSearch(input);
              //   }
              // }}
            />
          </div>
          <div>
            <p>Type</p>
            <Select
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
              id="filled-basic"
              label="Filled"
              variant="filled"
            >
              <MenuItem value="main course">main course</MenuItem>
              <MenuItem value="dessert">dessert</MenuItem>
              <MenuItem value="snack">snack</MenuItem>
              <MenuItem value="drink">drink</MenuItem>
              <MenuItem value="breakfast">breakfast</MenuItem>
              <MenuItem value="salad">salad</MenuItem>
            </Select>
          </div>
          <div>
            <p>Intolerances</p>
            <Select
              value={intolerance}
              onChange={(e) => {
                setIntolerance(e.target.value);
              }}
              id="filled-basic"
              label="Filled"
              variant="filled"
            >
              <MenuItem value="Dairy">Dairy</MenuItem>
              <MenuItem value="Egg">Egg</MenuItem>
              <MenuItem value="Gluten">Gluten</MenuItem>
              <MenuItem value="Grain">Grain</MenuItem>
              <MenuItem value="Wheat">Wheat</MenuItem>
            </Select>
          </div>
          <input
            type="submit"
            value="Submit"
            onClick={() => {
              setFormSubmitTriggred(true);
            }}
          />
        </form>
      </div>
      {/* /////////////////////////////////////////////////// */}

      {formSubmitTriggred === false || recipeData.length === 0 ? (
        <h1>"Sorry, Nothing found!"</h1>
      ) : (
        <>
          <h1>Your Search Results: </h1>
          <div className="Rcp-Card-cont">
            {recipeData.map((val, index) => {
              return (
                <SearchCard
                  name={val.title}
                  img={val.image}
                  state={val}
                  key={val.id}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Recipes;
