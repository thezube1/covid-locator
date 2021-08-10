import React, { Component } from "react";
import Link from "next/link";

class NavbarItem extends Component {
  state = {};

  styles = {
    ":hover:after": {
      width: 200,
    },
  };

  render() {
    return (
      <Link href={this.props.href}>
        <div className="navbar-item" id={this.props.custom}>
          {this.props.name}
        </div>
      </Link>
    );
  }
}

export default NavbarItem;
