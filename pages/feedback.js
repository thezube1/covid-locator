import React, { Component } from "react";
import Navbar from "../components/navbar/navbar";

class FeedbackPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div id="feedback-wrapper">
          <div id="feedback-content">
            <div>
              <div className="title feedback-title">Submit Feedback</div>
              <div>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FeedbackPage;
