import React, { Component } from "react";
// import M from "materialize-css/dist/js/materialize.min.js";
// import { BrowserRouter, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

function Headers() {
  const mainHeader = () => {
    return (
      <div className="mainHeader">
        <div className="contailer">
          <div className="row">
            <div className="col s12 m12 l12">
              <h1 id="googlehead" style={{ textAlign: "center" }}>
                Google Book Search
              </h1>
            </div>
            <div className="row">
              <div className="col s6 offset-s3 z-depth-3" id="search">
                <input
                  // value={props.search}
                  // onChange={props.handleInputChange}
                  name="book"
                  lost="books"
                  className="form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="Search your book here..."
                  style={{ color: "white" }}
                />
                <a class="waves-effect waves-light btn">Search</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <div>{mainHeader()}</div>;
}

export default Headers;
