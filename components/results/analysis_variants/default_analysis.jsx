import React, { Component } from "react";
import { FaGrinAlt, FaSmile, FaMeh } from "react-icons/fa";

class DefaultAnalysis extends Component {
  state = {};

  handleCases = () => {
    if (this.props.data.ten_day_cases <= 700) {
      return [
        "Low COVID infections",
        <FaGrinAlt className="analysis-emoji" key={0} />,
      ];
    } else if (this.props.data.ten_day_cases > 700) {
      return [
        "Higher than usual COVID infections",
        <FaMeh className="analysis-emoji emoji-red" key={1} />,
      ];
    }
  };

  handleFat = () => {
    if (this.props.data.fatality_ratio < 2) {
      return [
        "Very low fatality rate",
        <FaGrinAlt className="analysis-emoji" key={0} />,
      ];
    } else if (this.props.fatality_ratio < 5) {
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
      <>
        <div className="analysis-text-wrapper">
          <div>{this.handleCases()[1]}</div>
          <div className="analysis-text">{this.handleCases()[0]}</div>
        </div>
        <div className="analysis-text-wrapper">
          <div>{this.handleFat()[1]}</div>
          <div className="analysis-text">{this.handleFat()[0]}</div>
        </div>
      </>
    );
  }
}

export default DefaultAnalysis;
