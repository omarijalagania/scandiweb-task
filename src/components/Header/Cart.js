import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import classes from "./Cart.module.css";

export class Cart extends Component {
  state = {
    productQuantity: 1,
  };
  render() {
    return (
      <div className={classes.cartContainer}>
        <div className={classes.itemInfo}>
          <p> My bag </p>
          <small>
            {this.props.cart.length > 0 ? this.props.cart.length : "0"}
          </small>
        </div>

        {this.props.cart.length > 0 ? (
          this.props.cart.map((item) => {
            return (
              <div key={item[0].id} className={classes.itemContainer}>
                <div className={classes.itemDescription}>
                  <p>{item[0].name}</p>
                  <p>{item[0].description.replace(/(<([^>]+)>)/gi, "")}</p>
                  <p>{item[0].prices[0].amount}</p>
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
                  <img src={item[0].gallery[0]} alt={item[0].name} />
                </div>
              </div>
            );
          })
        ) : (
          <p style={{ padding: "15px" }}>No items</p>
        )}
        <div className={classes.total}>
          <p>Total</p>
          <p>100</p>
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

const mapStateToProps = (state) => {
  return {
    cart: state.products.cart,
  };
};

export default connect(mapStateToProps)(Cart);
