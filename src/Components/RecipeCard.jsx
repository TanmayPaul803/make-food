import React from "react";

function RecipeCard(props) {
  return (
    <div className="recipeCard">
      <div className="card">
        <div className="top">
          <img
            src={` https://spoonacular.com/recipeImages/${props.id}-556x370.jpg

`}
            alt=" Recipe Img"
          />
          <p></p>
        </div>
        <div className="info">
          <div className="name">{props.name}</div>
          <div className="about">
            <p>
              <span>Ready In:</span>
              {` ${props.readyIn} Munites`}
            </p>
            <p>
              <span>Servings:</span> {props.servings}
            </p>
            <p>
              <span>Dish Type:</span> {props.type ? "Veg" : "Nonveg"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
// {props.img}   {props.type ? "veg" : "nonveg"}   {props.name}
export default RecipeCard;
