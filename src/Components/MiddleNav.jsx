import { React, useState } from "react";

import "../App.css";
import "../ComponentCSS/Catagories.css";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

function MiddleNav() {
  const history = useHistory();
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div>
      <div className="catagoriesBar">
        <div className="contItem">
          <Link to="/foodWebsite/keywords">Keywords</Link>
        </div>
        <div className="contItem">
          <Link to="/foodWebsite/catagories">Populer catagories</Link>
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
            onKeyPress={(e)=>{if(e.key==="Enter")
            { setSearch(input);
              history.push({
                pathname: "/foodWebsite/searched",
                state: search,
              });}
            }}
            value={input}
          />
          {/* <Button
          variant="contained"
          color="secondary"
            onClick={() => {
              setSearch(input);
              history.push({
                pathname: "/foodWebsite/searched",
                state: search,
              });
            }}
          >
            Search
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default MiddleNav;
