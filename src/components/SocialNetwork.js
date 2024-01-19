import React from "react";

const SocialNetwork = () => {
  const anime = () => {
    const social = document.querySelectorAll(".social-network a");
    social.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        const attrX = e.offsetX - 2 + "px";
        const attrY = e.offsetY - 1 + "px";
        link.style.transform = `translate(${attrX}, ${attrY})`;
      });
      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  };
  return (
    <div className="social-network">
      <ul className="">
        <a
          href="https://www.linkedin.com/in/comels/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anime}
        >
          <li className="fab fa-linkedin-in"></li>
        </a>
        <a
          href="https://github.com/comels"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anime}
        >
          <li className="fab fa-github"></li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
