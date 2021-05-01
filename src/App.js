import useState from "react";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { Route, Switch } from "react-router-dom";
import AboutCatagory from "./Components/AboutCatagory";
import AboutRecipe from "./Components/AboutRecipe";
import Recipes from "./Components/Recipes";

// import { ToastContainer, toast } from "react-toastify";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Switch>
        <Route path="/foodWebsite" component={Home} />
        <Route path="/name" component={AboutCatagory} />
        <Route path="/aboutRecipe" component={AboutRecipe} />
        <Route path="/Recipes" component={Recipes} />
      </Switch>
    </>
  );
};
export default App;
