import React, { Component } from "react";
import Navbar from "../components/navbar/navbar";

class AboutPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div id="about-wrapper">
          <div id="about-content">
            <div className="title" id="about-title">
              What is <span id="about-covid">COVID</span> Locator?
            </div>
            <div className="about-text">
              COVID Locator is a free service which allows you to quickly find
              important COVID statistics about your current location. It is only
              currently available in the United States and Canada because of
              database limitations.
            </div>
            <br />

            <div className="about-text">
              The COVID-19 infection data is from John Hopkins University, while
              the vaccination data is from the CDC.
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutPage;
