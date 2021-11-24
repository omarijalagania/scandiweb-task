import React, { Component } from "react";

import classes from "./CartStatusIcon.module.css";

export class CartStatusIcon extends Component {
  render() {
    return <div className={classes.statusContainer}>0</div>;
  }
}

export default CartStatusIcon;
