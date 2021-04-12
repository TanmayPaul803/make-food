import { React, useState } from "react";
import "../App.css";
import "../ComponentCSS/Catagories.css";
import { Link } from "react-router-dom";
function MiddleNav() {
  const [input, setInput] = useState();
  const [search, setSearch] = useState();
  console.log(search);
  return (
    <div>
      <div className="catagoriesBar">
        <div className="contItem">
          <Link to="/keywords">Keywords</Link>
        </div>
        <div className="contItem">
          <Link to="/catagory">Populer catagories</Link>
        </div>
        {/* <div className="contItem">
          <Link to="/catagory">catagory</Link>
        </div> */}
        <div className="contItem">
          <input
            type="text"
            placeholder="Search"
            className="searchInput"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setSearch(input);
              }
            }}
            value={input}
          />
        </div>
      </div>
    </div>
  );
}

export default MiddleNav;
