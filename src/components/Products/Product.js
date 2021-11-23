import React, { Component } from "react";

import classes from "./Product.module.css";

export class Product extends Component {
  render() {
    return (
      <div className={classes.div1}>
        <img
          src={this.props.product.gallery[0]}
          alt={this.props.product.name}
        />
        <p className={classes.title}>{this.props.product.name}</p>
        <p className={classes.price}>$ {this.props.product.prices[0].amount}</p>
      </div>
    );
  }
}

export default Product;
