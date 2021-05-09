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

import SearchedComponent from "./SearchedComponent";

/// icons///
import RecipeBook from "../Assets/4329557-cooking/svg/016-recipe book.svg";
import Footer from "./Footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
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
        <Splide className="FRCPsplide">
          <SplideSlide className="FRCPsplideSlide">
            <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
            <p>Name</p>
          </SplideSlide>
          <SplideSlide>
            <img src="https://images.unsplash.com/photo-1488900128323-21503983a07e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
          </SplideSlide>
        </Splide>

        <div className="right">
          <div>
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
