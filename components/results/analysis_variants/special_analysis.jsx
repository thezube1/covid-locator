import React, { Component } from "react";
import { FaGrinAlt, FaSmile, FaMeh } from "react-icons/fa";

class SpecialAnalysis extends Component {
  state = {};

  handleCases = (number) => {
    if (number <= 1000) {
      return [
        "Low COVID infections",
        <FaGrinAlt className="analysis-emoji" key={0} />,
      ];
    } else if (number > 1000) {
      return [
        "Higher than usual COVID infections",
        <FaMeh className="analysis-emoji emoji-red" key={1} />,
      ];
    }
  };

  handleVac = (number) => {
    if (number >= 70) {
      return [
        "Reached 70% vaccine goal",
        <FaGrinAlt className="analysis-emoji" key={0} />,
      ];
    } else if (number >= 60) {
      return [
        "Almost met 70% vaccine goal",
        <FaSmile className="analysis-emoji emoji-yellow" key={1} />,
      ];
    } else {
      return [
        "Not enough vaccinations",
        <FaMeh className="analysis-emoji emoji-red" key={2} />,
      ];
    }
  };

  handleFat = (number) => {
    if (number < 2) {
      return [
        "Very low fatality rate",
        <FaGrinAlt className="analysis-emoji" key={0} />,
      ];
    } else if (number < 5) {
      return [
        "Low fatality rate",
        <FaSmile className="analysis-emoji emoji-yellow" key={1} />,
      ];
    } else {
      return [
        "Higher than usual fatality rate",
        <FaMeh className="analysis-emoji emoji-red" key={2} />,
      ];
    }
  };

  render() {
    return (
      <div id="analysis-wrapper">
        {this.props.data.data.map((item, index) => {
          if (item[1] === "Cases In 10 Days") {
            return (
              <div key={index} className="analysis-text-wrapper">
                <div>{this.handleCases(item[0])[1]}</div>
                <div className="analysis-text">
                  {this.handleCases(item[0])[0]}
                </div>
              </div>
            );
          } else if (item[1] === "Vaccinated" && item[2] === "percent") {
            return (
              <div key={index} className="analysis-text-wrapper">
                <div>{this.handleVac(item[0])[1]}</div>
                <div className="analysis-text">
                  {this.handleVac(item[0])[0]}
                </div>
              </div>
            );
          } else if (item[1] === "Fatality Ratio") {
            return (
              <div key={index} className="analysis-text-wrapper">
                <div>{this.handleFat(item[0])[1]}</div>
                <div className="analysis-text">
                  {this.handleFat(item[0])[0]}
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default SpecialAnalysis;
