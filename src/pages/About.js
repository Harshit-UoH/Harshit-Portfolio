import React from "react";
import pic from "../images/pic.png";
import Pdf from "../files/Harshit_Resume.pdf";
import Carou from "../components/Carousel";
import ScrollAnimation from "react-animate-on-scroll";
import "../css/styleAbout.css";

/* ------------------ ICONS ------------------- */
import { FaSmileWink } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="page">
        <div className="pageposition">
          <ScrollAnimation animateIn="fadeIn">
            <h1 className="aboutheading">ABOUT ME</h1>
          </ScrollAnimation>
          <div className="progress prohor">
            <div className="progress-bar horizontalrow"></div>
          </div>
        </div>
        <div className="maincontent">
          <div className="row ml-0">
            <div className="col-12 col-md-6 pl-0">
              <img src={pic} alt="mypic"></img>
            </div>
            <div className="col-12 col-md-6">
              <div className="details">
                {/* <h1>I am Harshit</h1> */}
                <h5>
                  I am a person with smiling face&nbsp;
                  <FaSmileWink /> &nbsp;and I believe that the most pleasant
                  5-letter word on this Earth is ‘SMILE’.
                </h5>
                <p>
                  Due to my enduring passion for Computer Science, I enjoy
                  building upon my knowledge of various computer programs and
                  websites that I can utilise to further my career in the
                  industry. I also enjoy playing a number of sports, including
                  Badmintion and Kho Kho.
                </p>
                <table className="table  table-hover">
                  <tbody>
                    <tr>
                      <th scope="row">Name</th>
                      <td>Harshit</td>
                    </tr>
                    <tr>
                      <th scope="row">Age</th>
                      <td>24</td>
                    </tr>
                    <tr>
                      <th scope="row">Nationality</th>
                      <td>Indian</td>
                    </tr>
                    <tr>
                      <th scope="row">Languages</th>
                      <td>English, Hinidi & Nepali</td>
                    </tr>
                    <tr>
                      <th scope="row">Address</th>
                      <td>Men's Hostel-D, UOH Telangana</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className="button">
                <a href={Pdf} target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </button>
            </div>
          </div>
          <div>
            <ScrollAnimation animateIn="fadeIn">
              <h1 className="aboutheading1">Certification</h1>
            </ScrollAnimation>

            <div className="progress prohor">
              <div className="progress-bar horizontalrow"></div>
            </div>
            <Carou />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
