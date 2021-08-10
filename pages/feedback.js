import React, { Component } from "react";
import Navbar from "../components/navbar/navbar";
import axios from "axios";

class FeedbackPage extends Component {
  state = {
    first: "",
    last: "",
    email: "",
    feedback: "",
    sent: false,
    incomplete: false,
    error: false,
  };

  handleSubmit = async () => {
    if (
      this.state.first === "" ||
      this.state.last === "" ||
      this.state.email === "" ||
      this.state.feedback === ""
    ) {
      this.setState({ incomplete: true });
    } else {
      const request = await axios.post("/api/feedback", {
        first: this.state.first,
        last: this.state.last,
        email: this.state.email,
        feedback: this.state.feedback,
      });
      if (request.data === true) {
        this.setState({ sent: true });
      } else {
        this.setState({ error: true });
      }
    }
  };
  render() {
    return (
      <>
        <Navbar />
        <div id="feedback-wrapper">
          <div id="feedback-content">
            <div>
              <div className="title feedback-title">
                <span id="home-covid">Submit</span> Feedback
              </div>

              <div id="feedback-input-wrapper">
                {this.state.sent ? (
                  <div
                    className="text"
                    style={{ color: "green", marginBottom: 20 }}
                  >
                    Feedback has been submitted!
                  </div>
                ) : (
                  false
                )}
                {this.state.incomplete ? (
                  <div
                    className="text"
                    style={{ color: "red", marginBottom: 20 }}
                  >
                    Please make sure all fields are entered
                  </div>
                ) : (
                  false
                )}
                {this.state.error ? (
                  <div
                    className="text"
                    style={{ color: "red", marginBottom: 20 }}
                  >
                    An error has occurred
                  </div>
                ) : (
                  false
                )}
                <div id="feedback-name-wrapper">
                  <input
                    onChange={(e) => this.setState({ first: e.target.value })}
                    type="text"
                    className="feedback-input"
                    placeholder="First name"
                    style={{ marginRight: 20 }}
                  />
                  <input
                    onChange={(e) => this.setState({ last: e.target.value })}
                    type="text"
                    className="feedback-input"
                    placeholder="Last name"
                  />
                </div>
                <div>
                  <input
                    onChange={(e) => this.setState({ email: e.target.value })}
                    type="text"
                    className="feedback-input"
                    id="feedback-email"
                    placeholder="Email"
                  />
                </div>
                <textarea
                  onChange={(e) => this.setState({ feedback: e.target.value })}
                  className="feedback-input feedback-textarea"
                  placeholder="Enter Feedback"
                />
                <button className="button" onClick={this.handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FeedbackPage;
