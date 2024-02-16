import React from "react";
import "./Frontpage.css";
import { Link } from "react-router-dom";
import peronal from "./FrontpageAssests/todo.jpg";
import progress from "./FrontpageAssests/progress.jpg";
import account from "./FrontpageAssests/account.jpg";
import frame from "./FrontpageAssests/Frame5.png";
import List from "./icon/Vector.png";
import Financial from "./icon/Vector (1).png";
import Oragnize from "./icon/organize.png";
import Anlyze from "./icon/Group (1).png";
import footerImg from './FrontpageAssests/footerImg.jpg'
import whitelogo from './FrontpageAssests/white.png'

const Frontpage = () => {
  return (
    <div className="frontpage-module">
      <div className="text-modules">
        <div className="frontpage-title">
          <h2 className="big-text-module">
            KEEP YOUR LIFE IN TRACK , ONE TASK AT A TIME
          </h2>
          <p className="small-text-module">
            Get started today , start listing your daily activities and
            financial journal with organizMe
          </p>
        </div>
        <div className="getstarted-btn">
          <button type="button" className="btn" id="start-sign-btn">
            <Link to="/sign">GET STARTED</Link>
          </button>
        </div>
      </div>
      <div className="image-container"></div>

      <div className="reason-modules">
        <h2 className="reason-title">Reason to choose our site</h2>
      </div>
      <div className="card-container">
        <div className="card" style={{ width: "18rem" }}>
          <img src={peronal} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Activities</h5>
            <p className="card-text">
              Manage Your Personal And Bussiness Activities.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={progress} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Progress</h5>
            <p className="card-text">
              Map your Daily progress for improvement.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={account} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Account</h5>
            <p className="card-text">
              Manage your Accounting activities for personal and bussiness.
            </p>
          </div>
        </div>
      </div>
      <div className="description">
        <img src={frame} alt="" className="frame-img" />
        <div className="description-items">
          <h5 className="descp-text">
            Plane thing carefully To keep things neat
          </h5>
          <p className="desp-text">
            Our website helps to keep your task and acoounting history well
            managed. You can calculate your day to day progress by analizing the
            list. We keep your private data like passowrd , bank details and
            other private information as well as image secure from being miss
            placed or thief . Our system is overall Package for managing person
            / bussiness acrtivties , account history , secreate data. You can
            vist our blog section to get more detaiils about our platform
          </p>
          <button type="button" className="btn btn-primary" id="blog-btn">
            <Link to='/blog'>Blog</Link>
          </button>
        </div>
      </div>

      <div className="box-module">
        <div
          className="card"
          style={{ width: "14rem", backgroundColor: "#7B61FF" }}
          id="#list-logo"
        >
          <img src={List} className="card-img-top custom-img" alt="..." />
          <div className="card-body">
            <p className="card-text" id="customize-text">
              REMEBER TASK.
            </p>
          </div>
        </div>

        <div
          className="card"
          style={{ width: "14rem", backgroundColor: "#7B61FF" }}
        >
          <img src={Anlyze} className="card-img-top custom-img" alt="..." />
          <div className="card-body">
            <p className="card-text" id="customize-text">
              ANAYLIZE YOUR TASK.
            </p>
          </div>
        </div>

        <div
          className="card"
          style={{ width: "14rem", backgroundColor: "#7B61FF" }}
        >
          <img src={Financial} className="card-img-top custom-img" alt="..." />
          <div className="card-body">
            <p className="card-text" id="customize-text">
              RECORD YOUR FINANCIAL HISTORY.
            </p>
          </div>
        </div>

        <div
          className="card"
          style={{ width: "14rem", backgroundColor: "#7B61FF" }}
        >
          <img src={Oragnize} className="card-img-top custom-img" alt="..." />
          <div className="card-body">
            <p className="card-text" id="customize-text">
              BE ORGANIZE.
            </p>
          </div>
        </div>
      </div>
      <div className="guide-module">
        <h5>creating a todo-list will help in development and growth</h5>
        <p className="custom-text">
          To Do list is vitally important because it helps you to prioritize.
          There are many things you could be doing. You can write down a To Do
          list with probably 50 things on it, not too much of a trouble. There’s
          always plenty to do in life, and more and more things happen as your
          day goes on. You’ll constantly be adding to a To Do list. The good
          thing about having a list is that you can remeber. It’s very easy
          to look at all the things that are on the list and then choose what’s
          most important or what’s going to be the best use of your time.
        </p>
      </div>

   <div className="footer-module">
   <div className="footer">
  <div className="footer-items">
  <img src={whitelogo} alt="" className="footer-logo"/>
  <h1 className="footer-title"> OrganizeMe</h1>
  </div>
      </div>

      <div className="footer-image-container">
      <img src={footerImg} alt="" className="footer-img"/>
      </div>
   </div>
   <p className="footer-para">Join with us to start writing your day to day task and be more organize and also use for your bussines to increse your productivity  and efficiency by storing your fianancial data and activities </p>
   <div className="btn-section1">
              <button type="button" className="btn btn-primary btn-sm">
                <Link to='/login'>LogIn</Link>
              </button>{" "}
              <button
                type="button"
                className="btn btn-primary btn-sm bg-none"
                id="sign1"
              >
              <Link to='/sign'>SignUp</Link>
              </button>
            </div>
    </div>
  );
};

export default Frontpage;
