import React, { useEffect, useRef, useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const SearchCard = (props) => {
  const [isClicked, setIsClicked] = useState();

  const fevIcon = useRef();
  useEffect(() => {
    if (isClicked === undefined) {
      toast();
    } else if (isClicked === true) {
      fevIcon.current.style.color = "red";
      fevIcon.current.style.transition = ".2s";
      toast.success(`${props.name} is added to favourite`);
    } else {
      fevIcon.current.style.color = "grey";
      fevIcon.current.style.transition = ".2s";
      toast.error(`${props.name} is removed from favourite`);
    }
  }, [isClicked]);

  const setfev = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="searchCard-Container">
      <div className="top">{props.name}</div>
      <div className="mid">
        <img src={props.img} alt="Recipe" />
      </div>
      <div className="bottom">
        <div onClick={setfev}>
          <FavoriteIcon ref={fevIcon} onClick={props.getCardName} />
          {}
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
