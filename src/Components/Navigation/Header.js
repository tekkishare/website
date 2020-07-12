import React from "react";
import logo from "./../../Images/jk.png";
import "./headerNavigaion.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="HeaderParent">
      <div className="headerMenu">
        <div className="headerLogoLeft">
          <img src={logo} className="headerLogoImage" alt="logo" />
        </div>
        <div className="headerLogoright">
          <ul className="menuUL">
            <li>
              <NavLink to="/Home" className="headerNavigaionLink">
                Home
              </NavLink>
            </li>
            <li>
              <Link to="/tags" className="headerNavigaionLink">
                Blog Tags
              </Link>
            </li>
            {/* <li>
              <Link to="/Contact-Us" className="headerNavigaionLink">
                Contact Us
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
