import React from "react";
import "./aboutme.css";

export default class AboutMe extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="aboutMeBox">
          <p>All about me</p>
          <img className="aboutMeImage" src="/images/jk.png" alt="about me" />
          <br />
          <label>Follow Us</label>
          <br />
          <a href="https://www.linkedin.com/in/jitendra-sah/">
            <img
              className="aboutMeImage"
              src="/images/linkedin.jpg"
              alt="linked in"
            />
          </a>
          &nbsp;
          <a href="https://twitter.com/jitendradotnet">
            <img
              className="aboutMeImage"
              src="/images/twitter.jpg"
              alt="linked in"
            />
          </a>
        </div>
      </React.Fragment>
    );
  }
}
