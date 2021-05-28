import React, { useState } from "react";
import "../ComponentCSS/NavBar.css";
import FastfoodRoundedIcon from "@material-ui/icons/FastfoodRounded";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import { BsList, BsX } from "react-icons/bs";
const NavBar = () => {
  const [sideNavState, setSideNavState] = useState(false);
  return (
    <div className="navBar">
      <p className="navBar_logo">
        <FastfoodRoundedIcon />
      </p>
      <ul className={sideNavState ? "navItems toggle_nav" : "navItems"}>
        <li>
          <NavLink
            to="/"
            className="link"
            onClick={() => {
              setSideNavState(!sideNavState);
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Recipes"
            className="link"
            onClick={() => {
              setSideNavState(!sideNavState);
            }}
          >
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            className="link"
            onClick={() => {
              setSideNavState(!sideNavState);
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactUs"
            className="link"
            onClick={() => {
              setSideNavState(!sideNavState);
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div
        className="togglemenu"
        onClick={() => {
          setSideNavState(!sideNavState);
        }}
      >
        {sideNavState ? <BsX /> : <BsList />}
      </div>
    </div>
  );
};

export default NavBar;
