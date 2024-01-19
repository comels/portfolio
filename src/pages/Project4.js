import React from "react";
import Project from "../components/Project";
import Mouse from "../components/Mouse";
import Button from "../components/Button";
import Nav from "../components/Nav";
import SocialNetwork from "../components/SocialNetwork";

const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Nav />
        <SocialNetwork />
        <Project projectNumber={3} />
        <Button left={"/project3"} right={"/contact"}/>
      </div>
    </main>
  );
};

export default Project4;
