import React, { Component } from "react";

import classes from "./Currency.module.css";

export class Currency extends Component {
  render() {
    return (
      <div className={classes.main}>
        {this.props.products
          ? this.props.products[0].prices.map((price) => {
              return (
                <p key={price.amount} className={classes.currency}>
                  {price.currency}
                </p>
              );
            })
          : ""}
      </div>
    );
  }
}

export default Currency;
