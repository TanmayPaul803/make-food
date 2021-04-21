import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { CallReceived, LocalFlorist } from "@material-ui/icons";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import RecipeCard from "./RecipeCard";
import { NavLink } from "react-router-dom";
import bgImg from "../Assets/foodwall.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function AboutRecipe(props) {
  const [simmilerRecipe, setSimmilerRecipe] = useState([]);
  const [foodInfo, setFoodInfo] = useState({
    readyIn: "",
    dishTypes: ["something"],
    vegetarian: false,
    ingredients: [],
    recipeSteps: [],
    simmilerRecipe: [],
    desc: "",
  });

  const foodID = props.location.state.id;
  const FoodName = props.location.state.title;
  // console.log(apiData);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getData = async () => {
      const RecipeInfoAPI = await axios.get(
        `https://api.spoonacular.com/recipes/${foodID}/information?apiKey=49510ae643c54e1dbe96171df5c05662&includeNutrition=false`
      );
      //setApiData(response.data[0].steps);
      const simmilerRecipeResponse = await axios.get(
        `https://api.spoonacular.com/recipes/${foodID}/similar?apiKey=49510ae643c54e1dbe96171df5c05662&number=4`
      );
      setFoodInfo({
        name: RecipeInfoAPI.data.title,
        desc: RecipeInfoAPI.data.summary,
        readyIn: RecipeInfoAPI.data.readyInMinutes,
        dishTypes: RecipeInfoAPI.data.dishTypes,
        vegetarian: RecipeInfoAPI.data.vegetarian,
        servings: RecipeInfoAPI.data.servings,
        image: `https://spoonacular.com/recipeImages/${RecipeInfoAPI.data.id}-480x360.jpg`,
        ingredients: RecipeInfoAPI.data.extendedIngredients,
        recipeSteps: RecipeInfoAPI.data.analyzedInstructions[0].steps,
        simmilerRecipe: simmilerRecipeResponse.data,
      });
      setSimmilerRecipe(simmilerRecipeResponse.data);
      console.log(simmilerRecipe);
    };
    getData();
  }, [foodID]);
  // console.log(foodInfo.ingredients);
  setTimeout(() => {
    document.getElementById("desc").innerHTML = foodInfo.desc;
  }, 1000);
  return (
    <div className="aboutRecipe">
      <div className="BGImg">
        <img src={bgImg} alt="" />
      </div>
      {/* {nwe} */}
      <div className="Recipe-Info-Tittle">
        <div className="inputCont">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="RcpInfo">
          <div className="RCPinfoTop">
            <div className="name">
              <h1 style={{ textTransform: "capitalize" }}>{foodInfo.name}</h1>
            </div>
            <hr />
            <div className="recipeInfoList">
              <p style={{ textTransform: "capitalize" }}>
                <i class="fas fa-utensils"></i> {foodInfo.dishTypes[0]}
              </p>
              <p>
                <i class="fas fa-clock"></i> {foodInfo.readyIn} Min
              </p>
              <p>
                <i class="fas fa-user-friends"></i> {foodInfo.servings} People
              </p>
            </div>
          </div>
          <div className="RCP-infoBottom">
            <div className="imgCont">
              <div className="RCP-IMG-container">
                <img src={foodInfo.image} alt="" />
              </div>
            </div>
            <div className="desc">
              <h1>Description</h1>
              <p id="desc"></p>
            </div>
          </div>
          <hr className="RCP-hr" />
        </div>
      </div>
      <div className="recipeContent">
        <hr />
        <div className="extendedInfo">
          <div className="ingredients">
            <div className="name">
              <h1 className="infoH">Ingredients</h1>
            </div>

            <div className="listCont">
              <div className="list">
                <ul>
                  {" "}
                  {foodInfo.ingredients.map((val, index) => {
                    return (
                      <li>
                        {`${val.measures.us.amount}
                    ${val.measures.us.unitLong}
                    ${val.name}`}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="directions">
            <h1 className="infoH">Directions</h1>
            <div className="list">
              {foodInfo.recipeSteps.map((val, index) => {
                return (
                  <p key={index}>
                    <span>{index + 1}. </span>
                    {val.step}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        {/* {///////////////////////////////////////////////////Simmiler Cat/////////////////////////} */}
        <div className="simmiler-cat">
          <div className="similler-cat-title-container">
            <div className="div">
              <hr />
            </div>
            <div className="divTitle-SRcp">
              <h1>Simmler Recipe</h1>
            </div>
            <div className="div">
              <hr />
            </div>
          </div>
          <div className="similer-recipe-container">
            {simmilerRecipe.map((val, index) => {
              return (
                <>
                  <NavLink to={{ pathname: "/aboutRecipe", state: val }}>
                    <RecipeCard
                      name={val.title}
                      id={val.id}
                      readyIn={val.readyInMinutes}
                      servings={val.servings}
                      key={val.id}
                    />
                  </NavLink>
                </>
              );
            })}

            {/* <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard /> */}
          </div>
        </div>
      </div>
      {/* // {//////////////////////////////////////////////////////} */}
      <div className="SocialLinks">
        <div className="link">
          <div className="linkitem">
            <i class="fab fa-facebook-f fa-2x"></i>Facebook
          </div>
        </div>
        <div className="link">
          <div className="linkitem">
            <i class="fab fa-twitter fa-2x"></i>
            Twitter
          </div>
        </div>
        <div className="link">
          <div className="linkitem">
            <i class="fab fa-linkedin-in fa-2x"></i>
            Linkdin
          </div>
        </div>
        <div className="link">
          <div className="linkitem">
            <i class="fab fa-instagram fa-2x"></i>
            Instagram
          </div>
        </div>
        <div className="link">
          <div className="linkitem">
            <i class="fab fa-youtube fa-2x"></i>
            Youtube
          </div>
        </div>
        <div className="link">
          <div className="linkitem">
            <i class="fab fa-pinterest-p fa-2x"></i>
            Pinterest
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <div className="top">
            <div className="div1">
              <h1>Website</h1>
              <div className="FtrContainer">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias explicabo consequuntur sed, delectus dolor nostrum
                  sunt ab. Officiis ipsam perspiciatis nihil nostrum ea, totam
                  error voluptates ipsa eligendi temporibus fuga? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Molestias
                  explicabo consequuntur sed, delectus dolor nostrum sunt ab.
                  Officiis ipsam perspiciatis nihil nostrum ea, totam error
                  voluptates ipsa eligendi temporibus fuga?
                </p>
              </div>
            </div>
            <div className="div2"></div>
            <div className="div3"></div>
          </div>
          <div className="bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutRecipe;
