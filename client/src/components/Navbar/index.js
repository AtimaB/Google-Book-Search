import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
// import { BrowserRouter, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import { FaSearch, FaRegSave } from "react-icons/fa";

class Navbar extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {});
  }

  render() {
    return (
      <div className="navbar-fixed-top">
        <nav>
          <div className="nav-wrapper">
            <div className="container">
              <a
                to="/#aboutMe"
                data-target="slide-out"
                className="sidenav-trigger"
              >
                <i className="material-icons">menu</i>
              </a>
              <a smooth to="/#search" className="brand-logo">
                Google Book Search
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a href="/#search">
                    <FaSearch /> Search
                  </a>
                </li>

                <li>
                  <a href="/#saved">
                    <FaRegSave /> Saved
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ul id="slide-out" className="sidenav">
          <li>
            <li>
              <a href="/#search">Search</a>
            </li>
          </li>
          <li>
            <a href="/#saved">Saved</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
