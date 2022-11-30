import React, { Component } from "react";

class Slider extends Component {
  state = {};
  render() {
    return (
      <div className="slider-wrapper">
        <div
          className="slider"
          style={{
            transform: !this.props.statistics ? "translateX(162%)" : false,
          }}
        ></div>
        <button className="slider-button" onClick={this.props.enableStats}>
          Summary
        </button>
        <button className="slider-button" onClick={this.props.disableStats}>
          Breakdown
        </button>
      </div>
    );
  }
}

export default Slider;
