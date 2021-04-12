import React from "react";

function RecipeCard(props) {
  return (
    <div className="recipeCard">
      <div className="card">
        <div className="top">
          <img src={props.img} alt=" Recipe Img" />
          <p>{props.type ? "veg" : "nonveg"}</p>
        </div>
        <div className="info">
          <h2>{props.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
