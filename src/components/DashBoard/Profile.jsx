import React, { useState } from "react";
import User from "../../assets/images/footerImg.jpg";
import "./Dash-css/Profile.css";

const Profile = () => {
  const [TotalTask, Task] = useState(10);
  return (
    <div
      style={{
        backgroundColor: "#e3e7e6",
        marginTop: "0%",
        color: "black",
        padding: "5%",
        marginLeft: "14.6%",
      }}
    >
      <div className="card" style={{ width: "18rem" }} id="profle-box">
        <img src={User} className="card-img-top" alt="..." id="profile-img" />
        <div className="card-body" id="profile-box-text">
          <p className="card-text">
            <strong>Sandesh Bk</strong>
          </p>
          <p className="card-text">
            <strong>I am a Developer</strong>
          </p>
        </div>
      </div>

      <div className="task-progress-container">
        <div
          className="card text-white mb-3"
          style={{ maxWidth: "18rem" }}
          id="task-box"
        >
          <div className="card-header">Task Box</div>
          <div className="card-body" id="profile-text">
            <i
              class="fa-solid fa-list-check"
              style={{
                color: "white",
                paddingRight: "5%",
                paddingTop: "1%",
              }}
            ></i>
            <h5 className="card-title" id="sub-title">
              No. of Task
            </h5>
            <p className="card-text" id="number-display">
              {TotalTask}
            </p>
          </div>
        </div>
        <div
          className="card text-white mb-3"
          style={{ maxWidth: "18rem" }}
          id="task-box"
        >
          <div className="card-header">Task Complete Box</div>
          <div className="card-body" id="profile-text">
            <i
              class="fa-solid fa-list-check"
              style={{
                color: "white",
                paddingRight: "5%",
                paddingTop: "1%",
              }}
            ></i>
            <h5 className="card-title" id="sub-title">
              Complete
            </h5>
            <p className="card-text" id="number-display">
              {TotalTask}
            </p>
          </div>
        </div>
        <div
          className="card text-white mb-3"
          style={{ maxWidth: "18rem" }}
          id="task-box"
        >
          <div className="card-header">Task Pending Box</div>
          <div className="card-body" id="profile-text">
            <i
              class="fa-solid fa-list-check"
              style={{
                color: "white",
                paddingRight: "5%",
                paddingTop: "1%",
              }}
            ></i>
            <h5 className="card-title" id="sub-title">
              Pending
            </h5>
            <p className="card-text" id="number-display">
              {TotalTask}
            </p>
          </div>
        </div>
      </div>

      <div className="graph-section">
        <div className="chart-container">
          <div className="chart">
            <div className="chart-area"></div>

            <div className="x-axis">
              <div className="day-label">Sunday</div>
              <div className="day-label">Monday</div>
              <div className="day-label">Tuesday</div>
              <div className="day-label">Wednesday</div>
              <div className="day-label">Thursday</div>
              <div className="day-label">Friday</div>
              <div className="day-label">Saturday</div>
            </div>
          </div>
          <div className="sunday"></div>
          <div className="monday"></div>
          <div className="tuesday"></div>
          <div className="wednesday"></div>
          <div className="thursday"></div>
          <div className="friday"></div>
          <div className="saturday"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
