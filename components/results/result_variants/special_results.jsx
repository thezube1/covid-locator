import React, { Component } from "react";

class SpecialResults extends Component {
  state = {};

  processItem = (item) => {
    if (item[2] === "num") {
      return item[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else if (item[2] === "percent") {
      return `${item[0]}%`;
    } else {
      return item[0];
    }
  };

  render() {
    return (
      <>
        {this.props.data.data.map((item, index) => {
          if (item[1] !== "Fatality Ratio") {
            return (
              <div className="locate-data" key={index}>
                {item[1]}:{" "}
                <span className="locate-bold">{this.processItem(item)}</span>
              </div>
            );
          }
        })}
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
      </>
    );
  }
}

export default SpecialResults;
