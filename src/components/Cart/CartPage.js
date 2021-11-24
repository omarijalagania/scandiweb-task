import React, { Component } from "react";

import classes from "./CartPage.module.css";

import CategoryName from "../ui/CategoryName";
import SizeButton from "../ui/SizeButton";

export class CartPage extends Component {
  render() {
    return (
      <>
        <CategoryName>Cart</CategoryName>
        <div className={classes.cartRow}>
          <div className={classes.cartContainer}>
            <div className={classes.productContainer}>
              <div className={classes.productDetails}>
                <h2>Apollo</h2>
                <p>Running Short</p>
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
                  <img src="/images/sweater.jpeg" alt="sweater" />
                </div>
              </div>
            </div>
          </div>

          <div className={classes.cartContainer}>
            <div className={classes.productContainer}>
              <div className={classes.productDetails}>
                <h2>Apollo</h2>
                <p>Running Short</p>
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
                  <img src="/images/sweater.jpeg" alt="sweater" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CartPage;
