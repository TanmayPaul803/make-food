import React, { useRef, useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SearchCard = (props) => {
  const fevIcon = useRef();

  return (
    <div className="searchCard-Container">
      <div className="top">{props.name}</div>
      <div className="mid">
        <img src={props.img} alt="Recipe" />
      </div>
      <div className="bottom">
        <div
          onClick={() => {
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />;
            fevIcon.current.style.color = "#f33861";
            fevIcon.current.style.transition = ".3s";
          }}
        >
          <FavoriteIcon ref={fevIcon} />
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default SearchCard;
