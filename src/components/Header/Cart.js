import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import classes from "./Cart.module.css";

import OverLay from "../ui/OverLay";

export class Cart extends Component {
  state = {
    totalPrice: 0,
  };

  componentDidMount() {
    if (this.props.cart.length > 1) {
      const total = this.props.cart.reduce(
        (a, b) => 1 * a[0].prices[0].amount + 1 * b[0].prices[0].amount
      );
      this.setState({
        totalPrice: total,
      });
    } else {
      this.setState({
        totalPrice: this.props.cart[0][0].prices[0].amount,
      });
    }
  }

  render() {
    return (
      <OverLay
        onClick={this.props.cartToggleHandler}
        style={{ display: this.props.lat ? "block" : "none" }}
      >
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
            <p>{this.state.totalPrice.toFixed(2)}</p>
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
      </OverLay>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.products.cart,
  };
};

export default connect(mapStateToProps)(Cart);
