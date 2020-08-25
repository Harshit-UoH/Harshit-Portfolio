import React from "react";
import { Link, NavLink } from "react-router-dom";

/* -------------------- IMAGES ------------------- */
import logo from "../images/logo.png";
import profilepic from "../images/Harshit.png";

/* --------------------ICONS------------------------ */
import { IconContext } from "react-icons";
import { FaAlignRight } from "react-icons/fa"; // Nav
import { GiSelfLove } from "react-icons/gi"; // Home
import { BsInfoSquare } from "react-icons/bs"; // About
import { AiOutlineFilePdf } from "react-icons/ai"; // Resume
import { AiOutlineProject } from "react-icons/ai"; // Projects
import { RiContactsLine } from "react-icons/ri"; // Contact


function Navbar() { 
  return (
    <>
      <input type="checkbox" id="menu" />
      <nav className = "uppernav">
        <Link to="/Admin">
          <button className="admin" type="button">Admin Login</button>
        </Link>
        <label className="mylogo"><img src={logo} alt="profile pic" /></label>
        <label className="menu-bar" htmlFor="menu"><FaAlignRight className="menu-bar" /></label>
      </nav>
      <div className="side-menu">
        <center>
          <img src={profilepic} alt="harshit_image" />
          <hr className = "horizontalrow"></hr>
          <p>Harshit - 18mcmc42</p>
        </center>
        <center>
          <hr className = "horizontalrow"></hr>
        </center>
        <div>
          <IconContext.Provider value={{ color: "white", size: "2rem", className: "ico" }}>
            <NavLink to="/home" className="links mt-5 ">
              <GiSelfLove /> <span>HOME</span>
            </NavLink>
            <NavLink to="/About" className="links">
              <BsInfoSquare /> <span>ABOUT</span>
            </NavLink>
            <NavLink to="/Resume" className="links">
              <AiOutlineFilePdf /> <span>RESUME</span>
            </NavLink>
            <NavLink to="/Portfolio" className="links">
              <AiOutlineProject /> <span>PORTFOLIO</span>
            </NavLink>
            <NavLink to="/Contact" className="links">
              <RiContactsLine /> <span>CONTACT ME</span>
            </NavLink>
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
}

export default Navbar;
