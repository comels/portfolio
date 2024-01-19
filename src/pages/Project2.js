import React from "react";
import Project from "../components/Project";
import Nav from "../components/Nav";
import Mouse from "../components/Mouse";
import Button from "../components/Button";
import SocialNetwork from "../components/SocialNetwork";

const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Nav />
        <SocialNetwork />
        <Project projectNumber={1} />
        <Button left={"/project1"} right={"/project3"} />
      </div>
    </main>
  );
};

export default Project2;
