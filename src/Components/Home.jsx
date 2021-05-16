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


///lottie animation///
import { Player, Controls } from "@lottiefiles/react-lottie-player";


///svgs///
import ourGoalsvg from "../Assets/Svgs/undraw_Done_checking_re_6vyx.svg"
import contact_CardSvg from "../Assets/Svgs/undraw_active_support_6rwo.svg"
import varietyOfDish_CardSvg from "../Assets/Svgs/undraw_barbecue_3x93.svg"
import newRecipe_CardSvg from "../Assets/Svgs/undraw_diet_ghvw.svg"





function Home() {
 
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
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_nplwsz31.json" 

            className="aboutmeAnimation"
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
      </div>

      <div className="ourGoal">




        <div className="OG_Left"> <div className="ourGoal_svg"><img src={ourGoalsvg} alt="" srcset="" /></div></div>
        
        
        <div className="OG_Right">
          
          <div className="OurGoalCardCont">
          <div className="div left">
          <div className="ICON-Cont">
            <img src={newRecipe_CardSvg} alt="" />
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
            <img src={varietyOfDish_CardSvg} alt="" />
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
            <img src={contact_CardSvg} alt="" />
          </div>
          <p>Varity of dishes</p>
          <span></span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur,
          </p>
        </div></div></div>
        {/* // variety of dishes // new recipe regularly // quick support // */}
        {/* 
        */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
