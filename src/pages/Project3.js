import React from "react";
import Project from "../components/Project";
import Nav from "../components/Nav";
import Mouse from "../components/Mouse";
import Button from "../components/Button";
import SocialNetwork from "../components/SocialNetwork";

const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Nav />
        <SocialNetwork />
        <Project projectNumber={2} />
        <Button left={"/project2"} right={"/project4"} />
      </div>
    </main>
  );
};

export default Project3;
