import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import '../styles/navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-wrapper"><img src="/images/logo.png"></img></div>
      <ul className="nav-links">
        <li>Products</li>
        <li>By Channel <IoIosArrowDown className="arrow-icon"/></li>
        <li>Company <IoIosArrowDown className="arrow-icon"/></li>
        <li>Resources</li>
        <li>Customers</li>
      </ul>
      <div className="buttons-wrapper">
        <button className="btn-small">Request Demo</button>
        <button className="btn-small">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
