import React, { Component } from "react";

import { Link } from "react-router-dom";

import classes from "./Cart.module.css";

export class Cart extends Component {
  render() {
    return (
      <div className={classes.cartContainer}>
        <div className={classes.itemInfo}>
          <p> My bag </p>
          <small>2 items</small>
        </div>
        <div className={classes.itemContainer}>
          <div className={classes.itemDescription}>
            <p>Apollo</p>
            <p>Running short</p>
            <p>$50.00</p>
            <div className={classes.sizes}>
              <button className={classes.cartBtn}>X</button>
              <button className={classes.cartBtn}>L</button>
            </div>
          </div>

          <div className={classes.quantity}>
            <button>+</button>
            <p>1</p>
            <button>-</button>
          </div>
          <div className={classes.imagePreview}>
            <img src="/images/sweater.jpeg" alt="sweater" />
          </div>
        </div>

        <div className={classes.itemContainer}>
          <div className={classes.itemDescription}>
            <p>Apollo</p>
            <p>Running short</p>
            <p>$50.00</p>
            <div className={classes.sizes}>
              <button className={classes.cartBtn}>X</button>
              <button className={classes.cartBtn}>L</button>
            </div>
          </div>

          <div className={classes.quantity}>
            <button>+</button>
            <p>1</p>
            <button>-</button>
          </div>
          <div className={classes.imagePreview}>
            <img src="/images/sweater.jpeg" alt="sweater" />
          </div>
        </div>
        <div className={classes.total}>
          <p>Total</p>
          <p>$100.00</p>
        </div>
        <div className={classes.btns}>
          <Link to="/cart">
            <button
              onClick={this.props.cartToggleHandler}
              className={classes.viewBtn}
            >
              view bag
            </button>
          </Link>
          <button className={classes.checkBtn}>checkout</button>
        </div>
      </div>
    );
  }
}

export default Cart;
