import { SP } from "next/dist/next-server/lib/utils";
import React, { Component } from "react";
import DefaultAnalysis from "./analysis_variants/default_analysis";
import SpecialAnalysis from "./analysis_variants/special_analysis";

class Analysis extends Component {
  state = {};

  render() {
    return (
      <div id="analysis-wrapper">
        {this.props.special ? (
          <SpecialAnalysis data={this.props.data} />
        ) : (
          <DefaultAnalysis data={this.props.data} />
        )}
      </div>
    );
  }
}

export default Analysis;
