import React, { Component } from "react";

import classes from "./CartPage.module.css";
import SizeButton from "../ui/SizeButton";
export class CartItem extends Component {
  render() {
    return (
      <div className={classes.cartContainer}>
        <div className={classes.productContainer}>
          <div className={classes.productDetails}>
            <h2>{this.props.item[0].name}</h2>
            <p>{this.props.item[0].description.replace(/(<([^>]+)>)/gi, "")}</p>
            <p>$50.00</p>
            <div className={classes.productSizes}>
              <SizeButton className={classes.forBtn}>X</SizeButton>
              <SizeButton className={classes.forBtn}>M</SizeButton>
            </div>
          </div>

          <div className={classes.rightContainer}>
            <div className={classes.rightButtons}>
              <button>+</button>
              <p>1</p>
              <button>-</button>
            </div>
            <div className={classes.rightImage}>
              <img src={this.props.item[0].gallery[0]} alt="sweater" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
