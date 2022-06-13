import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
            <NavLink to="/home/products">Products</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <NavLink to="/home/aboutus">About US</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <NavLink to="/home/contactus">Contact US</NavLink>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
