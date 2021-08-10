import React, { Component } from "react";
import Link from "next/link";
import NavbarItem from "./navbar-item";

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
          <NavbarItem href="/about" name="About" />
          <NavbarItem href="/feedback" name="Feedback" custom="feedback-item" />
          <NavbarItem
            href="/privacy-policy"
            custom="privacy-item"
            name="Privacy Policy"
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
