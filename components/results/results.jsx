import React, { Component } from "react";
import DefaultResults from "./result_variants/default_results";

class Results extends Component {
  state = {};
  render() {
    return (
      <div id="results-wrapper">
        {this.props.special ? (
          <div>Special</div>
        ) : (
          <DefaultResults
            country={this.props.data.country}
            total_cases={this.props.data.total_cases}
            ten_day_cases={this.props.data.ten_day_cases}
            fatality_ratio={this.props.data.fatality_ratio}
            vaccinated={this.props.data.vaccinated}
          />
        )}
        {/* 
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
        </div>*/}
      </div>
    );
  }
}

export default Results;
