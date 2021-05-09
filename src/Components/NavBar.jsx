import React from "react";
import "../ComponentCSS/NavBar.css";
import FastfoodRoundedIcon from "@material-ui/icons/FastfoodRounded";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <header>
        <FastfoodRoundedIcon className="logo" />
        <nav>
          <ul className="nav-links">
            <NavLink to="/foodWebsite">
              <li>Home</li>
            </NavLink>
            <NavLink to="/Recipes">
              <li>Recipes</li>
            </NavLink>

            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <NavLink to="/contactUs">
              <li>Contact Us</li>
            </NavLink>
          </ul>
        </nav>
        <a href="" className="cta">
          <MenuIcon />
        </a>
      </header>
    </div>
  );
};

export default NavBar;
