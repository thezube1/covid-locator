import React, { Component } from "react";
import { geolocated } from "react-geolocated";
import axios from "axios";
import Navbar from "../components/navbar/navbar";

class LocatePage extends Component {
  state = {
    data: undefined,
    trackable: undefined,
    state: undefined,
    county: undefined,
    cases: undefined,
    loading: false,
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
      axios
        .get(
          `https://nominatim.openstreetmap.org/reverse?lat=${this.props.coords.latitude}&lon=${this.props.coords.longitude}&format=json`
        )
        .then((data) => {
          this.setState({
            data: data.data.address,
            state: data.data.address.state,
            county: data.data.address.county,
          });

          axios
            .post("/api/county-data", {
              county: data.data.address.county,
              state: data.data.address.state,
            })
            .then((data) =>
              this.setState({ cases: data.data, loading: false })
            );
        });
    }
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
              <div className="locate-error">
                Tracking not currently available
              </div>
            ) : (
              false
            )}
            {this.state.data && this.state.cases ? (
              <div>
                <div className="locate-data">County: {this.state.county}</div>
                <div className="locate-data">State: {this.state.state}</div>

                <div className="locate-data">
                  Cases:{" "}
                  {this.state.cases
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
              </div>
            ) : (
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
