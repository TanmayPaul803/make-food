import React from "react";
import Keywords from "./Keywords";
import "../App.css";
function KeywordComponent() {
  const getKeyword = (val) => {
    console.log(val);
  };

  return (
    <div className="keywordComponent">
      <div className=".kContainer">
        <ul>
          {Keywords.map((val, index) => {
            return (
              <li onClick={getKeyword.bind(this, val)} id={index}>
                {val}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default KeywordComponent;
