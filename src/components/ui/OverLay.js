import React, { Component } from "react";

import classes from "./OverLay.module.css";

export class OverLay extends Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        className={classes.overlay}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}

export default OverLay;
