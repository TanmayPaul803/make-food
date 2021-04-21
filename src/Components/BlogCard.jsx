import React from "react";

const BlogCard = () => {
  return (
    <div className="blogCard">
      <div className="top">
        <div className="imgwrapper">
          <img
            src="https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt=""
            srcset=""
          />
        </div>
        <div className="info">
          <div>
            <div className="infoImgWrapper">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt=""
              />
            </div>

            <p>Lara Croft</p>
          </div>
          <div>
            <p className="setright">13th Dec</p>
            <p className="setright">
              <i className="far fa-heart"></i>15
            </p>
            <p className="setright">
              <i className="far fa-comment"></i>03
            </p>
          </div>
        </div>
      </div>
      <div className="blgCardBttmCont">
        <h5 className="BlogHeading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </h5>
        <p className="blogPText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          sint? Quidem odit consequatur cupiditate debitis, modi reprehenderit
          ullam sed omnis
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
