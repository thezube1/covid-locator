import React, { Component } from "react";
import { FaGrinAlt, FaSmile, FaMeh } from "react-icons/fa";

class Analysis extends Component {
  state = {};
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
  render() {
    return (
      <div id="analysis-wrapper">
        <div className="analysis-text-wrapper">
          <div>{this.handleVac()[1]}</div>
          <div className="analysis-text">{this.handleVac()[0]}</div>
        </div>
      </div>
    );
  }
}

export default Analysis;
