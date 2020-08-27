import React, { Component } from "react";
import data from "../data/ProjectData";
import ScrollAnimation from "react-animate-on-scroll";

/* ---------------------- ICONS ---------------------- */
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";

/* ----------------------- FILTER BUTTONS ----------------- */
const buttons = [
  { name: "All Project", value: "All Project" },
  { name: "Web Development", value: "Web Development" },
  { name: "Application Software", value: "Application Software" },
];

class SearchFilterCopy extends Component {
  state = {
    itemsToDisplay: [],
  };
  componentDidMount() {
    this.setState({
      itemsToDisplay: data,
    });
  }

  handleClick = (name) => {
    let itemsToDisplay = [];
    if (name === "All Project") {
      itemsToDisplay = data;
    } else {
      itemsToDisplay = data.filter((data) => data.Type === name);
    }

    this.setState({ itemsToDisplay });
  };

  render() {
    return (
      <>
        <div className="centers">
          <div className="btn-group " role="group" aria-label="Basic example">
            {buttons.map(({ name, value }) => (
              <ScrollAnimation animateIn="bounce">
              <button
                type="button"
                className="btn btn-secondary filterbtn"
                key={name}
                value={value}
                onClick={this.handleClick.bind(this, name)}
              >
                {name}
              </button>
              </ScrollAnimation>
            ))}
          </div>
        </div>
        <div>
          <div className="restcontainer">
            {this.state.itemsToDisplay.map((rest) => {
              return (
                <div key={rest.Id}>
                  <ScrollAnimation animateIn="flipInX">
                    <div className="rest">
                      <div className="restinfo">
                        <span className="restname">
                          {rest["Name"]}
                          <a
                            href={rest["Link"]}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <AiOutlineLink className="ico" />
                          </a>
                        </span>
                        <div className="resttypes">
                          <h5>Technologies</h5>

                          {rest["Technology"].map((Technologies) => {
                            return (
                              <div
                                // pill
                                key={Technologies.id}
                                className="restTechnologies"
                                variant="light"
                              >
                                {Technologies.Tech}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="sepline"></div>
                      <div className="reststats">
                        <div>
                          <a
                            href={rest["Gitlink"]}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <AiFillGithub />{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default SearchFilterCopy;
