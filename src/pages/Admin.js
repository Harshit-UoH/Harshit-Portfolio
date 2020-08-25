import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "../css/styleAdmin.css";

const Admin = () => {
  return (
    <>
      <div className="page">
        <div className="pageposition">
          <ScrollAnimation animateIn="fadeIn">
            <h1 className="aboutheading">MY Admin</h1>
          </ScrollAnimation>

          <div className="progress prohor">
            <div className="progress-bar bg-blue progress-bar-striped horizontalrow"></div>
          </div>
        </div>
        <div className="maincontent">
          <div className="row">
            <div className="col-12 col-md-2"></div>
            <div className="col-12 pr-0 col-md-8 pl-4 ">
              <form
                className="text-center border border-light p-5 contactfrom"
                action="#!"
              >
                <p className=" cardheading h2 mb-4">Admin Log In</p>

                <input
                  type="email"
                  id="defaultLoginFormEmail"
                  className="form-control mb-4"
                  placeholder="E-mail"
                  required
                />

                <input
                  type="password"
                  id="defaultLoginFormPassword"
                  className="form-control mb-4"
                  placeholder="Password"
                  required
                />

                <div className="d-flex justify-content-around">
                  <div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="defaultLoginFormRemember"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="defaultLoginFormRemember"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>

                <button className="btn btn-info btn-block my-4" type="submit">
                  Sign in
                </button>
              </form>
            </div>
            <div className="col-12 col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
