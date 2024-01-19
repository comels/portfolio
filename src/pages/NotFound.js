import React from "react";
import { NavLink } from "react-router-dom";
import Mouse from "../components/Mouse";

const NotFound = () => {
  return (
    <div className="notFound">
      <Mouse />
      <div className="circle"></div>
      <div className="text">
        <h2>{"< 404 />"}</h2>
        <NavLink to="/">
          <h3>back to home</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
