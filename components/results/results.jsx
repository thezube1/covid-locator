import React, { Component } from "react";

class Results extends Component {
  state = {};
  render() {
    return (
      <div id="results-wrapper">
        <div className="locate-data">
          County: <span className="locate-bold">{this.props.county}</span>
        </div>
        <div className="locate-data">
          State: <span className="locate-bold">{this.props.state}</span>
        </div>

        <div className="locate-data">
          Total Cases:{" "}
          <span className="locate-bold">
            {this.props.cases.total_cases
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>
        <div className="locate-data">
          Cases In 10 Days:{" "}
          <span className="locate-bold">
            {this.props.cases.ten_day_cases
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>
        <div className="locate-data">
          Fully Vaccinated:{" "}
          <span className="locate-bold">{this.props.pec_vac}%</span>
        </div>
      </div>
    );
  }
}

export default Results;
