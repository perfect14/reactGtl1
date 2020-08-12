/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import pic from "./img/IMG_20181105_143342_0_1541428674806.jpg";

//adding props
const Person = ({ img, name, job, children }) => {
  //using template literrals

  return (
    <article className="person">
      <img src={pic} alt="me"></img>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

//now to create a component

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="21" name="spider" job="web developer"></Person>
      <Person img="22" name="ephya" job="tech expect"></Person>
      <Person img="76" name="delma" job="engineer">
        <p>Delma is the most fantastic engineer among all the females</p>
      </Person>
    </section>
  );
};

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));
