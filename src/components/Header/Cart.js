import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import classes from "./Cart.module.css";
import { currencySymbol } from "../ui/Symbol";
import OverLay from "../ui/OverLay";

export class Cart extends Component {
  state = {
    totalPrice: 0,
    quantity: 1,
    items: [0],
    quantityAmount: 0,
  };

  render() {
    let symbol = currencySymbol(this.props.price);

    const amount = this.props.cart.map((item) => item);

    //check currency with Header currency
    const currencyCheck = amount.map((item) =>
      item.prices.filter((item) => item.currency === this.props.price)
    );
    //extract price arrays from array
    const extractFromArr = currencyCheck.map(
      (item) => item[item.map((item, index) => index)]
    );
    //final result
    const PriceResult = extractFromArr.map((item) => item.amount);

    //total summ
    const total =
      PriceResult.length !== 0
        ? PriceResult.reduce(
            (a, b) => 1 * a + 1 * b //products sum
          )
        : 0;

    const productQuantityHandler = (productId) => {
      //get index of product in cart
      const productIndex = this.props.cart.findIndex(
        (item) => item.id === productId
      );

      //save price to state
      this.setState((prevState) => ({
        quantityAmount:
          prevState.quantityAmount + currencyCheck[productIndex][0].amount,
      }));

      //add quantity for item number
      this.setState({
        items: [...this.state.items, "1"],
      });
      console.log(currencyCheck[productIndex][0].amount);
    };

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
              return (
                <div key={item.id} className={classes.itemContainer}>
                  <div className={classes.itemDescription}>
                    <p>{item.name}</p>
                    <p>{item.description.replace(/(<([^>]+)>)/gi, "")}</p>
                    <p>
                      {symbol}
                      {PriceResult[index]}
                    </p>
                    <div className={classes.sizes}>
                      <button className={classes.cartBtn}>X</button>
                      <button className={classes.cartBtn}>L</button>
                    </div>
                  </div>

                  <div className={classes.quantity}>
                    <button
                      onClick={productQuantityHandler.bind(null, item.id)}
                    >
                      +
                    </button>
                    <p>{this.state.items.length}</p>
                    <button>-</button>
                  </div>
                  <div className={classes.imagePreview}>
                    <img src={item.gallery[0]} alt={item.name} />
                  </div>
                </div>
              );
            })
          ) : (
            <p style={{ padding: "15px" }}>No items</p>
          )}
          <div className={classes.total}>
            <p>Total</p>
            <p>
              {symbol}
              {(total + this.state.quantityAmount).toFixed(2)}
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
    price: state.products.price[0].currency,
    products: state.products.data,
  };
};

export default connect(mapStateToProps)(Cart);
