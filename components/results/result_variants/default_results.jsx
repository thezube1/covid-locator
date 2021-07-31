import React, { Component } from "react";

class DefaultResults extends Component {
  state = {};
  render() {
    console.log(this.props.vaccinated);
    return (
      <>
        <div className="locate-data">
          Country: <span className="locate-bold">{this.props.country}</span>
        </div>
        <div className="locate-data">
          Total Cases:{" "}
          <span className="locate-bold">
            {this.props.total_cases
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>
        <div className="locate-data">
          Cases In 10 Days:{" "}
          <span className="locate-bold">
            {this.props.ten_day_cases
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>
        <div className="locate-data">
          Fatality Ratio:{" "}
          <span className="locate-bold">
            {Math.round(1000 * this.props.fatality_ratio) / 1000}%
          </span>
        </div>
        <div className="locate-data">
          Vaccinated:{" "}
          <span className="locate-bold">
            {this.props.vaccinated === ""
              ? "Unavailable"
              : this.props.vaccinated
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>
      </>
    );
  }
}

export default DefaultResults;
