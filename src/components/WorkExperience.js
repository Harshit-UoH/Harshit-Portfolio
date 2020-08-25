import React, { Component } from "react";
import Workdata from "../data/WorkExperienceData";

class Workexperience extends Component {
  render() {
    return (
      <>
        {Workdata.map((workpost) => {
          return (
            <React.Fragment key = {workpost.Id}>
              <h2 className="timeline__item timeline__item--year">{workpost.Year}</h2>
              <div className="timeline__item">
                <h3 className="timeline__title">{workpost.Company}</h3>
                <h4 className="location">{workpost.Location}</h4>
                <h5 className="role">{workpost.Role}</h5>
                <h3 className="pro">{workpost.Project}</h3>
                <p className="discreption d-none d-sm-block">
                  &nbsp;&nbsp;&nbsp;&nbsp;{workpost.Discription}
                </p>
              </div>
            </React.Fragment>
          )
        })}
      </>
    );
  }
}
export default Workexperience;
