import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "../css/styleHome.css";

/* -------------- ICONS ------------------ */
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="page">
        <div className="pageposition center">
          <center>
            <div className="intro">
              <ScrollAnimation
                animateIn="bounceInRight"
              >
                <h1>
                  Hi, I am <span>Harshit</span>
                </h1>
              </ScrollAnimation>
            </div>
            <p className="introP">
              I am a Full Stack Web Developer. I have done specialization in
              Full-Stack Web Development with React. I am also a founder of{" "}
              <a
                href="https://www.nielitsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Nielit&nbsp;-&nbsp;Solutions
              </a>
              . I'm currently pursuing my{" "}
              <span id="MCA">
                &quot;Master&nbsp;of&nbsp;Computer&nbsp;Applications&quot;
              </span>{" "}
              from{" "}
              <span className="UOH">
                Central&nbsp;University&nbsp;of&nbsp;Hyderabad
              </span>
              , Telangana.{" "}
            </p>
            <ScrollAnimation animateIn="bounce" animateOut="bounce">
              <div className="socialicon">
                <a
                  href="https://www.facebook.com/harshit.uoh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FaFacebook />
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/harshit.uoh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <AiFillInstagram />
                  </span>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCntaTZB4laaKTdxcfJRH6JA/?guided_help_flow=5"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <TiSocialYoutubeCircular />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/harshit-uoh-mca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <IoLogoLinkedin />
                  </span>
                </a>
                <a
                  href="https://twitter.com/Harshit05701101"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <AiFillTwitterCircle />
                  </span>
                </a>
              </div>
            </ScrollAnimation>
          </center>
        </div>
      </div>
    </>
  );
};

export default Home;
