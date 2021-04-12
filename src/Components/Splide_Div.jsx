import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Splide_Div() {
  return (
    <div>
      <Splide
        className="splide"
        options={{
          width: "800px",
          height: "400px",
        }}
      >
        <SplideSlide className="splideSlide">
          <div className="FeaturedRCP-Cont">
            <div className="Featured-Cont-Img-Wrapper">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
            </div>
            <div className="Featured-Cont-info">
              <h1>Name</h1>
              <p>
                This is the featured RecipeThis is the featured RecipeThis is
                the featured Recipe
              </p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide></SplideSlide>
      </Splide>
    </div>
  );
}

export default Splide_Div;
