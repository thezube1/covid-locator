import React, { Component } from "react";
import { geolocated } from "react-geolocated";
import axios from "axios";

class LocatePage extends Component {
  state = {
    trackable: undefined,
    key: "124376bc32a1c1bbddcba8ec1df6ba20",
  };

  canTrack = () => {
    if (
      !this.props.isGeolocationAvailable ||
      !this.props.isGeolocationEnabled
    ) {
      this.setState({ trackable: false });
    } else {
      this.setState({
        trackable: true,
      });

      axios
        .get(
          `http://api.positionstack.com/v1/reverse?access_key=${this.state.key}&query=${this.props.coords.latitude},${this.props.coords.longitude}`
        )
        .then((data) => {
          console.log(data.data);
        });
    }
  };
  render() {
    return (
      <div id="locate-wrapper">
        <div>
          <button className="button" onClick={this.canTrack}>
            Find Location
          </button>
        </div>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(LocatePage);
