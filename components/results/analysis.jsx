import React, { Component } from "react";
import DefaultAnalysis from "./analysis_variants/default_analysis";

class Analysis extends Component {
  state = {};

  render() {
    return (
      <div id="analysis-wrapper">
        {this.props.special ? (
          <div>Special</div>
        ) : (
          <DefaultAnalysis data={this.props.data} />
        )}
      </div>
    );
  }
}

export default Analysis;
