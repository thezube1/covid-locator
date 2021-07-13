import React, { Component } from "react";
import Link from "next/link";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div id="navbar-wrapper">
        <div id="navbar-content">
          <Link href="/">
            <div id="navbar-title">
              <span id="navbar-title-red">COVID</span> Locator
            </div>
          </Link>

          <Link href="/about">
            <div className="navbar-item">About</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
