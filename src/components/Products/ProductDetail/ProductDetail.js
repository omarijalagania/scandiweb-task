import React, { Component } from "react";

import classes from "./ProductDetail.module.css";

export class ProductDetail extends Component {
  componentDidMount() {
    let { id } = this.props.match.params;
    console.log(id);
  }
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <div className={classes.smallImages}>small image</div>
          <div className={classes.bigImage}>big image</div>
        </div>
        <div className={classes.productDetails}>details</div>
      </div>
    );
  }
}

export default ProductDetail;
