import React, { Component } from "react";
import Link from "next/link";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div id="navbar-wrapper">
        <Link href="/">
          <div id="navbar-title">
            <span id="navbar-title-red">COVID</span> Locater
          </div>
        </Link>
      </div>
    );
  }
}

export default Navbar;
