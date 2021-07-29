import React, { Component } from "react";
import { geolocated } from "react-geolocated";
import axios from "axios";

import Navbar from "../components/navbar/navbar";
import Results from "../components/results/results";
import Slider from "../components/slider/slider";
import Analysis from "../components/results/analysis";

class LocatePage extends Component {
  state = {
    data: undefined,
    trackable: undefined,
    state: undefined,
    county: undefined,
    cases: undefined,
    pec_vac: undefined,
    loading: false,
    statistics: true,
  };

  canTrack = () => {
    if (
      !this.props.isGeolocationAvailable ||
      !this.props.isGeolocationEnabled
    ) {
      this.setState({ trackable: false });
    } else {
      this.setState({
        data: false,
        trackable: true,
        loading: true,
      });

      axios.post("/api/covid-statistics", {
        latitude: this.props.coords.latitude,
        longitude: this.props.coords.longitude,
      });
      /*
      axios
        .get(
          `https://nominatim.openstreetmap.org/reverse?lat=${this.props.coords.latitude}&lon=${this.props.coords.longitude}&format=json`
        )
        .then((data) => {
          this.setState({
            data: data.data.address,
            state: data.data.address.state,
            county: data.data.address.county,
            country: data.data.address.country,
          });

          axios
            .post("/api/county-data", {
              county: data.data.address.county,
              state: data.data.address.state,
            })
            .then((data) =>
              this.setState({
                cases: data.data,
                loading: false,
                pec_vac: data.data.pec_vaccinated,
              })
            );
        });

        */
    }
  };

  handleStatChange = (isStat) => {
    this.setState({ statistics: isStat });
  };
  render() {
    return (
      <>
        <Navbar />

        <div id="locate-wrapper">
          <div id="locate-content">
            <button
              id="locate-trigger"
              className="button"
              onClick={this.canTrack}
            >
              {this.state.loading === false ? (
                <div>Find Location Data</div>
              ) : (
                <div>Loading</div>
              )}
            </button>
            {this.state.trackable === false ? (
              <div className="locate-error">Please allow location access</div>
            ) : (
              false
            )}
            {this.state.data && this.state.cases ? (
              <div>Test</div>
            ) : (
              /*
              <>
                <div style={{ display: "grid", justifyContent: "center" }}>
                  {this.state.statistics ? (
                    <Results
                      cases={this.state.cases}
                      county={this.state.county}
                      state={this.state.state}
                      pec_vac={this.state.pec_vac}
                    />
                  ) : (
                    <Analysis
                      pec_vac={this.state.pec_vac}
                      cases={this.state.cases}
                      fat_rat={this.state.cases.fatality_ratio}
                    />
                  )}
                </div>
                <Slider
                  statistics={this.state.statistics}
                  enableStats={() => this.setState({ statistics: true })}
                  disableStats={() => this.setState({ statistics: false })}
                />
              </>
              */
              false
            )}
          </div>
        </div>
      </>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 10,
})(LocatePage);
