import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { CircularProgressbar } from "react-circular-progressbar";
import WorkData from "../components/WorkExperience";
import EducationData from "../components/Education";

import "react-circular-progressbar/dist/styles.css";
import "../css/styleResume.css";

/* -------------------- ICONS --------------------- */
import { IconContext } from "react-icons";
import { DiJavascript1 } from "react-icons/di";
import { RiFlutterLine } from "react-icons/ri";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { BsPlus } from "react-icons/bs";
import { MdSchool } from "react-icons/md";
import { MdWork } from "react-icons/md";

const Resume = () => {
  return (
    <>
      <div className="page">
        <div className="pageposition">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <h1 className="aboutheading1">TECHNICAL SKILLS</h1>
          </ScrollAnimation>

          <div className="progress prohor">
            <div className="progress-bar bg-blue progress-bar-striped horizontalrow"></div>
          </div>
        </div>

        <div className="maincontent resumecontent">
          <IconContext.Provider
            value={{ color: "white", size: "2rem", className: "ico" }}
          >
            <div className="row">
              <div className="col-12 col-md-6 p-4">
                <h5>
                  Javascript <DiJavascript1 />
                </h5>
                <span>60%</span>
                <div className="progress">
                  <div className="progress-bar bg-blue progress-bar-striped  js"></div>
                </div>
              </div>
              <div className="col-12 col-md-6 p-4">
                <h5>
                  C++ <BsPlus />
                </h5>
                <span>70%</span>
                <div className="progress">
                  <div className="progress-bar bg-blue progress-bar-striped  cpp"></div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6 p-4">
                <h5>
                  Flutter <RiFlutterLine />
                </h5>
                <span>60%</span>
                <div className="progress">
                  <div className="progress-bar bg-blue progress-bar-striped  flutter"></div>
                </div>
              </div>

              <div className="col-12 col-md-6 p-4">
                <h5>
                  ReactJS <DiReact />
                </h5>
                <span>80%</span>
                <div className="progress">
                  <div className="progress-bar bg-blue progress-bar-striped  reactjs"></div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6 p-4">
                <h5>
                  NodeJS <DiNodejsSmall />
                </h5>
                <span>80%</span>
                <div className="progress">
                  <div className="progress-bar bg-blue progress-bar-striped  nodejs"></div>
                </div>
              </div>
              <div className="col-12 col-md-6 p-4">
                <h5>
                  MongodDB <DiMongodb />
                </h5>
                <span>70%</span>
                <div className="progress">
                  <div className="progress-bar bg-blue progress-bar-striped  mongodb"></div>
                </div>
              </div>
            </div>

            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <h1 className="aboutheading1">SOFT SKILLS</h1>
            </ScrollAnimation>

            <div className="progress prohor">
              <div className="progress-bar bg-blue progress-bar-striped horizontalrow"></div>
            </div>
            <ScrollAnimation animateIn="fadeIn">
              <div className="circularbar row">
                <div className=" col-sm-6 col-lg-3 aligncenter ">
                  <CircularProgressbar
                    value={80}
                    text={"80"}
                    strokeWidth={3}
                    className="circulararea"
                  />
                  <p>Work in Team</p>
                </div>
                <div className=" col-sm-6 col-lg-3 aligncenter">
                  <CircularProgressbar
                    value={65}
                    text={"65"}
                    strokeWidth={3}
                    className="circulararea"
                  />
                  <p>Creativity</p>
                </div>
                <div className=" col-sm-6 col-lg-3 aligncenter">
                  <CircularProgressbar
                    value={80}
                    text={"75"}
                    strokeWidth={3}
                    className="circulararea"
                  />
                  <p>Time Management</p>
                </div>
                <div className=" col-sm-6 col-lg-3 aligncenter">
                  <CircularProgressbar
                    value={60}
                    text={"70"}
                    strokeWidth={3}
                    className="circulararea"
                  />
                  <p>Teaching</p>
                </div>
              </div>
            </ScrollAnimation>
          </IconContext.Provider>
          <div>
            <ScrollAnimation animateIn="fadeIn">
              <h1 className="aboutheading1">RESUME</h1>
            </ScrollAnimation>
            <div className="progress prohor">
              <div className="progress-bar bg-blue progress-bar-striped horizontalrow"></div>
            </div>
            <h1 className="qualification">
              <MdWork /> Working Experience
            </h1>
            <div className="timeline">
              <WorkData />
            </div>
            <h1 className="qualification">
              <MdSchool /> Educational Qualifications
            </h1>
            <div className="timeline">
              <EducationData />
              <h2 className="timeline__item timeline__item--year">2011</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
