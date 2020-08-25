import React, { Component } from "react";
import EducationData from "../data/EducationData";

class Education extends Component {
  render() {
    return (
      <>
        {EducationData.map((educationpost) => {
            return (
              <React.Fragment key = {educationpost.Id}>
                <h2 className="timeline__item timeline__item--year">
                  {educationpost.Year}
                </h2>
                  <div className="timeline__item">
                    <h3 className="timeline__title">{educationpost.College}</h3>
                    <h4 className="school">{educationpost.School}</h4>
                    <h5 className="degree">{educationpost.Degree}</h5>
                    <h3 className="score">{educationpost.Score}</h3>
                    <p className="discreption d-none d-sm-block">
                      &nbsp;&nbsp;&nbsp;&nbsp;{educationpost.Discription}
                    </p>
                  </div>
                
              </React.Fragment>
            );
        })}
      </>
    );
  }
}
export default Education;
