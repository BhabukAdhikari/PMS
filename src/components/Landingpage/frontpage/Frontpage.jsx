import React from "react";
import "./Frontpage.css";
import { Link } from "react-router-dom";


import Entry from "./Entry";
import Reason from './Reason.jsx'
import Description from './Description.jsx'
import Todo from "./Todo.jsx";
import Footer from "./Footer.jsx";


const Frontpage = () => {
  return (
    <div className="frontpage-module">
    <Entry/>
<Reason/>
<Description/>
<Todo/>
<Footer/>
    </div>
  );
};

export default Frontpage;
