import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navigation">
      <NavLink
        to="/"
        className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
      >
        <li>accueil</li>
      </NavLink>

      <li className="nav-portfolio">
        <p className="p-portfolio">portfolio</p>
        <ul className="nav-projects">
          <NavLink
            to="/project1"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li>project 1</li>
          </NavLink>

          <NavLink
            to="/project2"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li>project 2</li>
          </NavLink>

          <NavLink
            to="/project3"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li>project 3</li>
          </NavLink>

          <NavLink
            to="/project4"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li>project 4</li>
          </NavLink>
        </ul>
      </li>

      <NavLink
        to="/contact"
        className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
      >
        <li>contact</li>
      </NavLink>
    </div>
  );
};

export default Nav;
