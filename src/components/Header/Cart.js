import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import classes from "./Cart.module.css";
import { currencySymbol } from "../ui/Symbol";
import OverLay from "../ui/OverLay";
import MiniCart from "./MiniCart";

import { removeCartAction } from "../../redux/actions";

export class Cart extends Component {
  state = {
    totalPrice: 0,
    quantity: 1,
    activeBtn: "",
    quantityAmount: 0,
  };

  render() {
    let symbol = currencySymbol(this.props.price);

    return (
      <OverLay style={{ display: this.props.lat ? "block" : "none" }}>
        <div className={classes.cartContainer}>
          <div className={classes.itemInfo}>
            <p> My bag </p>
            <small>
              {this.props.cart.length > 0 ? this.props.cart.length : "0"}
            </small>
          </div>

          {this.props.cart.length > 0 ? (
            this.props.cart.map((item, index) => {
              return <MiniCart item={item} index={index} />;
            })
          ) : (
            <p style={{ padding: "15px" }}>No items</p>
          )}
          <div className={classes.total}>
            <p>Total</p>
            <p>
              {symbol}
              000
            </p>
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
    price: state.products.price[0],
    products: state.products.data,
  };
};

const mapDispatchToProps = () => {
  return {
    removeCartAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Cart);
