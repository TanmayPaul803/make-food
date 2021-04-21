import React, { useRef } from "react";
import HeroImg from "./HeroImg";
import Catagories from "./Catagories";
import LatestRecipes from "./LatestRecipes.jsx";
import MiddleNav from "./MiddleNav";
import { Route, Switch } from "react-router-dom";
import KeywordComponent from "./KeywordComponent.jsx";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Splide_Div from "./Splide_Div";
import SearchedComponent from "./SearchedComponent";

/// icons///
import RecipeBook from "../Assets/4329557-cooking/svg/016-recipe book.svg";
import Footer from "./Footer";

function Home() {
  /// MUI Button///
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  ///////////////
  return (
    <div className="Home">
      <HeroImg />
      <MiddleNav />
      <Switch>
        <Route path="/foodWebsite/catagories" component={Catagories} />
        <Route path="/foodWebsite/keywords" component={KeywordComponent} />
        <Route path="/foodWebsite/searched" component={SearchedComponent} />
        <Catagories />
        <KeywordComponent />
      </Switch>

      <LatestRecipes />
      <div className="featuredRCP">
        <div className="left">
          <Splide_Div />
        </div>
        <div className="right">
          <div className="div">
            <h1>Featured Recipe</h1>
            <p>
              aaaLorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aperiam architecto, vero dicta corporis est reprehenderit
              asperiores quas aliquam illum reiciendis exercitationem error
              voluptatem facere at! Aut quos adipisci minus facilis?
            </p>
            <Button variant="contained" color="primary">
              View More
            </Button>
          </div>
        </div>
      </div>
      <div className="aboutMe">
        <div className="Abtext">
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            sapiente molestias eveniet delectus, sit porro, earum dolore, quam
            explicabo praesentium dolorem eum laudantium quia est tempora soluta
            aperiam repellendus? Dolores.
          </p>
          <div className="myInfo">
            <div className="infoM">
              <span>117</span>
              <p>Tasty Recipes</p>
            </div>
            <div className="infoM">
              {" "}
              <span>117</span>
              <p>Tasty Recipes</p>
            </div>
            <div className="infoM">
              {" "}
              <span>117</span>
              <p>Tasty Recipes</p>
            </div>
          </div>
        </div>
        <div className="Abtimg">
          <img
            src="https://www.dlf.pt/dfpng/maxpng/14-146749_chef-png.png"
            alt=""
          />
        </div>
      </div>

      <div className="ourGoal">
        {/* // variety of dishes // new recipe regularly // quick support // */}
        <div className="div left">
          <div className="ICON-Cont">
            <img src={RecipeBook} alt="" />
          </div>

          <p>Varity of dishes</p>
          <span></span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur,
          </p>
        </div>
        <div className="div middle">
          <div className="ICON-Cont">
            <img src={RecipeBook} alt="" />
          </div>
          <p>Varity of dishes</p>
          <span></span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur,
          </p>
        </div>
        <div className=" div right">
          <div className="ICON-Cont">
            <img src={RecipeBook} alt="" />
          </div>
          <p>Varity of dishes</p>
          <span></span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur,
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
