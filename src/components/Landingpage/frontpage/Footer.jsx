import React from 'react'
import footerImg from "./FrontpageAssests/footerImg.jpg";
import whitelogo from "./FrontpageAssests/white.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
         <div className="footer-module">
        <div className="footer">
          <div className="footer-items">
            <img src={whitelogo} alt="" className="footer-logo" />
            <h1 className="footer-title"> OrganizeMe</h1>
          </div>
        </div>

        <div className="footer-image-container">
          <img src={footerImg} alt="" className="footer-img" />
        </div>
      </div>
      <p className="footer-para">
        Join with us to start writing your day to day task and be more organize
        and also use for your bussines to increse your productivity and
        efficiency by storing your fianancial data and activities{" "}
      </p>
      <div className="btn-section1">
        <button type="button" className="btn btn-primary btn-sm">
          <Link to="/login">LogIn</Link>
        </button>{" "}
        <button
          type="button"
          className="btn btn-primary btn-sm bg-none"
          id="sign1"
        >
          <Link to="/sign">SignUp</Link>
        </button>
      </div>
    </div>
  )
}

export default Footer