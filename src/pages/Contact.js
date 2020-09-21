import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import "../css/styleContact.css";

/* --------------------- ICONS ---------------------- */
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className = "page">
        <div className = "pageposition">
        <ScrollAnimation animateIn="fadeIn">
            <h1 className="aboutheading1">CONTACT ME</h1>
          </ScrollAnimation>

          <div className="progress prohor">
            <div className="progress-bar bg-blue progress-bar-striped horizontalrow"></div>
          </div>
        </div>
        <div className=" pageposition pb-5">
          <div className="row">
            <div className="col-12 col-md-6 pl-2 pr-2">
              {/* <!-- Default form contact --> */}
              <iframe title="locationframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.013482034878!2d78.32713661418859!3d17.459068805330794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93049b911a51%3A0xbad8e8eec6820122!2sHostel%20D%2C%20Serilingampally%2C%20Hyderabad%2C%20Telangana%20500046!5e0!3m2!1sen!2sin!4v1596473255277!5m2!1sen!2sin" className="text-center contactfrom p-4"></iframe>
            </div>

            <div className="col-12 col-md-6 pl-0 pr-0">
                <div className="card contactcard m-4">
                  <div className="card-body">
                    <FaPhoneAlt className="icons" />
                    <p className="card-text">Phone </p>
                    <br />
                    <h5 className="cardelement">
                      <a href="tel: +918299136658">+91 8299136658</a>
                    </h5>
                    <h5 className="cardelement">
                      <a href="tel: +919450813889">+91 9450813889</a>
                    </h5>
                  </div>
                </div>
                <div className="card contactcard m-4">
                  <div className="card-body">
                    <MdEmail className="icons" />
                    <p className="card-text">Email </p>
                    <br />
                    <h5 className="cardelement">
                      <a href="mailto: harshkum313@gmail.com">
                        harshkum313@gmail.com
                      </a>
                    </h5>
                    <h5 className="cardelement">
                      <a href="mailto: 18mcmc42@uohyd.ac.in">
                        18mcmc42@uohyd.ac.in
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="card contactcard m-4 ">
                  <div className="card-body">
                    <MdLocationOn className="icons" />
                    <p className="card-text">Address</p>
                    <br />
                    <h5 className="cardelement">
                      Room No: 615 Men's Hostel - D, University of Hyderabad
                    </h5>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
