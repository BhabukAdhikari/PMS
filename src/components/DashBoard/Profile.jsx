import React, { useState } from "react";
import User from "../../assets/images/footerImg.jpg";
import "./Dash-css/Profile.css";
import { Chart } from "react-google-charts";
import Calendar from "./Calender";

const Profile = () => {
  const [TotalTask, setTotalTask] = useState(10);
  const data = [
    ['week', 'task'],
    ['Sunday', TotalTask],
    ['Monday', 55],
    ['Tuesday', 100],
    ['Wednesday', 44],
    ['Thursday', 24],
    ['Friday', 15] ,
    ['Saturday', 15]
  ];

  const options = {
    title: 'Your Weekly Analysis',
    chartArea: { width: '80%', height: '80%'  },
    hAxis: { title: 'week', minValue: 0 },
    vAxis: { title: 'task bar' },
    colors: ["7B61FF"]
  };

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

    <div style={{ width: '100%', maxWidth: 600, height: 500  }} className="task-graph">
      <Chart
        chartType="BarChart"
        data={data}
        options={options}
        width={'100%'}
        height={'100%'}
      />
    </div>
 
<div className="calender-section">
  <Calendar/>
</div>


    
    </div>
  );
};

export default Profile;
