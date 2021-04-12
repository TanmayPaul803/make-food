import React, { useState, useRef } from "react";
import "../ComponentCSS/Catagories.css";
import CatGallayCard from "./CatGallayCard";
import "../App.css";
import CatagoryData from "./CatagoryData";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const Catagories = () => {
  //search result

  // useRef use to refer to the  div with className parent
  const parentRef = useRef();
  if (parentRef.current) {
  }

  //collapsable div
  const [isOpen, setIsOpen] = useState(false);
  const catGallarySwitch = () => {
    setIsOpen(!isOpen);
  };

  ///get Card Data
  const getCardName = (e) => {
    console.log(e.name);
  };

  //Get API data ///
  const apiKey = `1a9b8c803ccf4b57a34259e418add293`;
  const query = `cake`;
  return (
    <>
      <div className="Catcontainer">
        <div className="popCatContainer">
          <div className="catNav">
            <div className="div1">
              <h3>Popular Catagories</h3>
            </div>
            <div className="div2">
              <Button
                variant="contained"
                color="secondary"
                onClick={catGallarySwitch}
                className="toggle"
              >
                View All
              </Button>
            </div>
          </div>
          <div
            className="parent"
            ref={parentRef}
            style={
              isOpen
                ? { height: parentRef.current.scrollHeight + "px" }
                : { height: "240px" }
            }
          >
            <div className="catGallary">
              {CatagoryData.map((val, index) => {
                return (
                  <>
                    <NavLink to={{ pathname: "/name", state: val }}>
                      <CatGallayCard
                        imgSrc={val.img}
                        catName={val.name}
                        key={index}
                        id={index}
                        value={val}
                        onSelect={getCardName}
                        className="gallaryCard"
                      />
                    </NavLink>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Catagories;
