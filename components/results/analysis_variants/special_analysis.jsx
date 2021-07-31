import React, { Component } from "react";

class SpecialAnalysis extends Component {
  state = {};

  /*
  handleVac = () => {
    if (this.props.pec_vac >= 70) {
      return [
        "Reached 70% vaccine goal",
        <FaGrinAlt className="analysis-emoji" key={0} />,
      ];
    } else if (this.props.pec_vac >= 60) {
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

  handleCases = () => {
    if (this.props.cases.ten_day_cases <= 1000) {
      return [
        "Low COVID infections",
        <FaGrinAlt className="analysis-emoji" key={0} />,
      ];
    } else if (this.props.cases.ten_day_cases > 1000) {
      return [
        "Higher than usual COVID infections",
        <FaMeh className="analysis-emoji emoji-red" key={1} />,
      ];
    }
  };

  handleFat = () => {
    if (this.props.fat_rat < 2) {
      return [
        "Very low fatality rate",
        <FaGrinAlt className="analysis-emoji" key={0} />,
      ];
    } else if (this.props.fat_rat < 5) {
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
  */

  render() {
    return (
      <div>
        {/*<div id="analysis-wrapper">
          <div className="analysis-text-wrapper">
            <div>{this.handleVac()[1]}</div>
            <div className="analysis-text">{this.handleVac()[0]}</div>
          </div>
          <div className="analysis-text-wrapper">
            <div>{this.handleCases()[1]}</div>
            <div className="analysis-text">{this.handleCases()[0]}</div>
          </div>
          <div className="analysis-text-wrapper">
            <div>{this.handleFat()[1]}</div>
            <div className="analysis-text">{this.handleFat()[0]}</div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default SpecialResults;
