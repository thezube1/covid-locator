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
              important COVID statistics about your current location. Detailed
              statistics are only available in the United States due to database
              limitations (however country statistics work). We are currently
              working on fetching more detailed statistics for countries around
              the world.
            </div>
            <br />

            <div className="about-text">
              The COVID-19 infection data and some vaccine data is from John
              Hopkins University, and other vaccination data is from the CDC.
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutPage;
