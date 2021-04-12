import React from "react";
import "../App.css";

function CatGallayCard(props) {
  return (
    <div
      className="CatGallayCardDiv"
      onClick={() => {
        props.onSelect(props.value);
      }}
    >
      <div className="imgContainer">
        <img src={props.imgSrc} alt="" />
        <div className="text">{props.catName}</div>
      </div>
    </div>
  );
}

export default CatGallayCard;
//""
