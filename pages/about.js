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
          </div>
        </div>
      </>
    );
  }
}

export default AboutPage;
