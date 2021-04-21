import React, { useEffect, useState } from "react";
import backImg from "../foodwall.jpg";
import { Select, MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import SearchCard from "./SearchCard";
import BlogCard from "./BlogCard";
import Footer from "./Footer";

const Recipes = () => {
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");
  const [type, setType] = useState("");
  const [intolerance, setIntolerance] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [includeIngdredient, setIncludeIngdredient] = useState("");

  const [recipeData, setRecipeData] = useState([]);
  const [formSubmitTriggred, setFormSubmitTriggred] = useState(false);
  const [desserts, setDesserts] = useState([]);
  const [snack, setsnack] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [mainCourse, setMainCourse] = useState([]);
  const [drinks, setDrinks] = useState([]);
  console.log(desserts);
  const clicked = (e) => {};

  useEffect(() => {
    const getData = async () => {
      const dessertsRes = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?number=6&apiKey=49510ae643c54e1dbe96171df5c05662&type=dessert`
      );
      setDesserts(dessertsRes.data.results);
      const snackRes = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?number=6&apiKey=49510ae643c54e1dbe96171df5c05662&type=snack`
      );
      setsnack(snackRes.data.results);

      const breakfastRes = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?number=6&apiKey=49510ae643c54e1dbe96171df5c05662&type=breakfast`
      );
      setBreakfast(breakfastRes.data.results);
      const mainCourseRes = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?number=6&apiKey=49510ae643c54e1dbe96171df5c05662&type=main course`
      );
      setMainCourse(mainCourseRes.data.results);
      const drinksRes = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?number=6&apiKey=49510ae643c54e1dbe96171df5c05662&type=drink`
      );
      setDrinks(drinksRes.data.results);
    };

    getData();
  }, []);
  return (
    <div className="recipes">
      <div className="hero">
        <img src={backImg} alt="" />
        <h1 className="welcomeText">Welcome to Recipes</h1>
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
                `https://api.spoonacular.com/recipes/complexSearch?query=${nameInput}&apiKey=49510ae643c54e1dbe96171df5c05662&cuisine=${cuisine}&diet=${diet}&includeIngredients=${includeIngdredient}&type=${type}&intolerances=${intolerance}&number=12`
              );
              setRecipeData(response.data.results);
            };
            getdata();
          }}
        >
          <div>
            <p className="searchP">Name of the Recipe</p>
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
            <p className="searchP">Cuisine</p>
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
            <p className="searchP">Diet</p>
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
            <p className="searchP">Include Ingredients</p>
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
            <p className="searchP">Type</p>
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
            <p className="searchP">Intolerances</p>
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
            value="Search"
            onClick={() => {
              setFormSubmitTriggred(true);
            }}
          />
        </form>
      </div>
      {/* /////////////////////////////////////////////////// */}

      {recipeData.length === 0 ? (
        <h1 className="SearchResponseText">
          {formSubmitTriggred === true && recipeData.length === 0
            ? " Nothing Found"
            : ""}
        </h1>
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
                  clicked={clicked.bind(this, val)}
                />
              );
            })}
          </div>
        </>
      )}
      <div className="mealTypeDiv">
        <h1 className="mealType">BreakFast</h1>{" "}
        <div className="Rcp-Card-cont">
          {breakfast.map((val) => {
            return (
              <SearchCard
                name={val.title}
                img={val.image}
                key={val.id}
                state={val}
              />
            );
          })}
        </div>
      </div>
      <div className="mealTypeDiv">
        <h1 className="mealType">Main Course</h1>
        <div className="Rcp-Card-cont">
          {mainCourse.map((val) => {
            return (
              <SearchCard
                name={val.title}
                img={val.image}
                key={val.id}
                state={val}
              />
            );
          })}
        </div>
      </div>
      <div className="mealTypeDiv">
        <h1 className="mealType">Snacks</h1>
        <div className="Rcp-Card-cont">
          {snack.map((val) => {
            return (
              <SearchCard
                name={val.title}
                img={val.image}
                key={val.id}
                state={val}
              />
            );
          })}
        </div>
      </div>
      <div className="mealTypeDiv">
        <h1 className="mealType">Desserts</h1>
        <div className="Rcp-Card-cont">
          {desserts.map((val) => {
            return (
              <SearchCard
                name={val.title}
                img={val.image}
                key={val.id}
                state={val}
              />
            );
          })}
        </div>
      </div>
      <div className="mealTypeDiv">
        <h1 className="mealType">Drinks</h1>
        <div className="Rcp-Card-cont">
          {drinks.map((val) => {
            return (
              <SearchCard
                name={val.title}
                img={val.image}
                key={val.id}
                state={val}
              />
            );
          })}
        </div>
      </div>
      <div className="latestBlog">
        <div className="LtsBlgCont">
          <h1>Latest Blog Post</h1>
          <p className="BlogPara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat
            natus, alias iure rerum eum iste sed magnam tempora porro Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            voluptas qui delectus maxime quae officiis,
          </p>
          <div className="blgCardContainerDiv">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recipes;
