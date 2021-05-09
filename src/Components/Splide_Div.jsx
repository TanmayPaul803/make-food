import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

function Splide_Div() {
  return (
    <div>
      <Splide>
        <SplideSlide>
          <img src="https://picsum.photos/200" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://picsum.photos/200" alt="Image 2" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Splide_Div;
