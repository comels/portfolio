import React from "react";
import Mouse from "../components/Mouse";
import Nav from "../components/Nav";
import Button from "../components/Button";
import Project from "../components/Project";
import SocialNetwork from "../components/SocialNetwork";

const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Nav />
        <SocialNetwork />
        <Project projectNumber={0} />
        <Button left={"/"} right={"/project2"} />
      </div>
    </main>
  );
};

export default Project1;
