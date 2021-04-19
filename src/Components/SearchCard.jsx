import React, { useRef, useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const SearchCard = (props) => {
  const fevIcon = useRef();

  const [isClicked, setIsClicked] = useState(true);

  const setStyleFev = () => {
    if (isClicked === true) {
      fevIcon.current.style.color = "#f33861";
      fevIcon.current.style.transition = ".3s";
    } else {
      fevIcon.current.style.color = "#fff";
      fevIcon.current.style.transition = ".3s";
    }
  };
  const clickEvnt = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="searchCard-Container">
      <div className="top">{props.name}</div>
      <div className="mid">
        <img src={props.img} alt="Recipe" />
      </div>
      <div className="bottom">
        <div onClick={props.clicked}>
          <FavoriteIcon
            ref={fevIcon}
            onClick={() => {
              clickEvnt();
              setStyleFev();
            }}
          />
        </div>
        <div>
          <ShareIcon />
        </div>
        <NavLink to={{ pathname: "/aboutRecipe", state: props.state }}>
          <Button variant="outlined" color="secondary">
            Read More
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default SearchCard;
