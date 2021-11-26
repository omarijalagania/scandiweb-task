import React, { Component } from "react";

import classes from "./SizeButton.module.css";

export class SizeButton extends Component {
  render() {
    return (
      <button
        className={`${classes.btn}`}
        onClick={this.props.handleClick}
        {...this.props}
      >
        {this.props.children} {console.log(this.props)}
      </button>
    );
  }
}

export default SizeButton;
