import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dash.css"; // CSS file for styling
import Whitelogo from "../CompnentAssets/white.png";

const Dashnav = () => {
  return (
    <div className="dash-navigation">
      <img src={Whitelogo} alt="" className="dashImage-container" />
      <h5 className="dash-module-title">OrganizeMe</h5>

      <div className="dash-items">
        <Link className="nav-text" to="/dashnav">
          {" "}
          <i
            class="fa-solid fa-user"
            style={{ color: "#ffffff", marginRight: "9%" }}
          ></i>{" "}
          Profile
        </Link>
        <Link className="nav-text" to="/addlist">
          <i
            class="fa-solid fa-plus"
            style={{ color: "#ffffff", marginRight: "9%" }}
          ></i>
          Add List
        </Link>
        <Link className="nav-text" to="/yourlist">
          {" "}
          <i
            class="fa-solid fa-address-book"
            style={{ color: "#ffffff", marginRight: "9%" }}
          ></i>
          Your List
        </Link>
        <Link
          className="nav-text"
          style={{
            marginTop: "170%",
          }}
          to="/setting"
        >
          <i
            class="fa-solid fa-gear"
            style={{ color: "#ffffff", marginRight: "9%" }}
          ></i>
          Setting
        </Link>
      </div>
    </div>
  );
};

export default Dashnav;
