import React from 'react';
import { Link } from "react-router-dom";

import "../css/styleError.css";

const Error = () => {
  return (
    <>
      <div className = "page">
        <div className = "pageposition fullheight ">
          <center className="styling mt-5">
            <h1>ERROR ..!</h1>
            <h2>404 PAGE NOT FOUND</h2>
            <Link to="/">
              <button className="btn btn-primary button">Back To Home</button>
            </Link>
          </center>
        </div>
      </div>
    </>
  )
}

export default Error
