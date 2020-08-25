import React from "react";
import SearchFilterCopy from "../components/Project";
import ScrollAnimation from "react-animate-on-scroll";
import Blogs from "../components/Blogs";
import "../css/stylePortfolio.css";

const Portfolio = () => {
  return (
    <>
      <div className="page">
        <div className="pageposition">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <h1 className="aboutheading">PROJECTS</h1>
          </ScrollAnimation>
          <div className="progress prohor">
            <div className="progress-bar bg-blue progress-bar-striped horizontalrow"></div>
          </div>
        </div>
        <div className="maincontent resumecontent">
          {/* <SearchFilter /> */}
          <SearchFilterCopy />
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <h1 className="aboutheading1">BLOGS</h1>
            </ScrollAnimation>
            <div className="progress prohor">
              <div className="progress-bar bg-blue progress-bar-striped horizontalrow"></div>
            </div>
            <div className="row d-flex justify-content-center">
              <Blogs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
