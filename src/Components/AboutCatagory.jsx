import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { NavLink } from "react-router-dom";
import { LocalFlorist } from "@material-ui/icons";
import Footer from "./Footer";

function AboutCatagory(props) {
  console.log(props);

  const apikey = "c7aaf86506c046b7a7e6e5b23664593a";
  const [data, setData] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);

    const api = async () => {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=49510ae643c54e1dbe96171df5c05662&query=${CatagoryName}&number=10&type=main course`
      );
      setData(res.data.results);
    };
    api();
  }, []);
  // console.log(data);
  //console.log(props.location.state);
  const CatagoryName = props.location.state.name;
  const thumb = props.location.state.thumb;
  const para = props.location.state.para;
  const desc = props.location.state.desc;
  const avlDisImg = props.location.state.avlDisImg;
  return (
    <div className="aboutCatagory">
      <div className="top">
        <div className="left">
          <div className="aboutCatagorycontainer">
            <div className="aboutCatagoryTopInfoContainer">
              <h3>fresh food</h3>
              <h1>{CatagoryName}</h1>
            </div>
            <p>{para}</p>
            <button className="LFT-Btn">Explore</button>
          </div>
        </div>
        <div className="right">
          <div className="catagoryThumbContainer">
            <img src={thumb} alt="" />
          </div>
        </div>
      </div>
      <div className="aboutCatagoryInfo">
        <div className="aboutCatagoryInfoTop">
          <div className="aboutCatagoryInfoTop-container">
            <h1>{CatagoryName}</h1>
            <p>{desc}</p>
          </div>
        </div>
      </div>
      <div className="aboutCatagoryInfobottom">
        <div className="ACIB-Img-wrapper">
          <img src={avlDisImg} alt="" />
        </div>

        <div className="availableDishes">
          <ol>
            {data.map((val) => {
              return (
                <NavLink to={{ pathname: "/aboutRecipe", state: val }}>
                  <li>{val.title}</li>
                </NavLink>
              );
            })}
          </ol>
        </div>
        <div className="availableDishes-Name">
          <h1>Available Dishes</h1>
        </div>
      </div>
    </div>
  );
}

export default AboutCatagory;
