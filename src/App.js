import React, { useLayoutEffect } from "react";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { Route, Switch, useLocation } from "react-router-dom";
import AboutCatagory from "./Components/AboutCatagory";
import AboutRecipe from "./Components/AboutRecipe";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/foodWebsite" component={Home} />
        <Route path="/name" component={AboutCatagory} />
        <Route path="/aboutRecipe" component={AboutRecipe} />
      </Switch>
    </>
  );
};
export default App;
