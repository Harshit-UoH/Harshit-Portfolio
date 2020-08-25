import React, { Component } from "react";
import Blogsdata from "../data/BlogsData";

/* ---------------------- ICONS -------------------------- */
import { AiOutlineLink } from "react-icons/ai";

class Blogs extends Component {
  render() {
    return (
      <>
        {Blogsdata.map((blogpost) => {
          return (
            <div className="col-12 col-md-6 col-lg-4" key={blogpost.ID}>
              <center>
                <h3>{blogpost.Name}</h3>
              </center>
              <div className="container">
                <img
                  className="image"
                  src={blogpost.Img}
                  alt={blogpost.Alt}
                />
                <div className="middle">
                  <a
                    className="link"
                    href={blogpost.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineLink />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
export default Blogs;
