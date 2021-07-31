import React, { Component } from "react";
import DefaultResults from "./result_variants/default_results";
import SpecialResults from "./result_variants/special_results";

class Results extends Component {
  state = {};
  render() {
    return (
      <div id="results-wrapper">
        {this.props.special ? (
          <SpecialResults />
        ) : (
          <DefaultResults
            country={this.props.data.country}
            total_cases={this.props.data.total_cases}
            ten_day_cases={this.props.data.ten_day_cases}
            fatality_ratio={this.props.data.fatality_ratio}
            vaccinated={this.props.data.vaccinated}
          />
        )}
      </div>
    );
  }
}

export default Results;
