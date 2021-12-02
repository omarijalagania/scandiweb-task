import React, { Component } from "react";

import { currencySymbol } from "../ui/Symbol";

import { connect } from "react-redux";
import { removeCartAction } from "../../redux/actions";

import classes from "./CartPage.module.css";
import SizeButton from "../ui/SizeButton";

export class CartItem extends Component {
  state = {
    totalPrice: 0,
    quantity: 1,
    activeBtn: "",
    quantityAmount: 0,
  };
  render() {
    //get changed symbol
    let symbol = currencySymbol(this.props.price);

    //check currency with Header currency
    const currencyCheck = this.props.cart.map((item) =>
      item.prices.filter((item) => item.currency === this.props.price)
    );

    //extract price arrays from array
    const extractFromArr = currencyCheck.map(
      (item) => item[item.map((item, index) => index)]
    );

    //final result
    const priceResult = extractFromArr.map((item) => item.amount);

    //total summ
    const total =
      priceResult.length !== 0
        ? priceResult.reduce(
            (a, b) => 1 * a + 1 * b //products sum
          )
        : 0;

    //active size btn
    const btnActiveHandler = (index) => {
      this.setState({ activeBtn: index });
    };

    //remove item from cart
    const itemRemoveHandler = (productId) => {
      const removedItem = this.props.cart.filter(
        (item) => item.id !== productId
      );
      this.props.removeCartAction(removedItem);
    };

    // Product Add Func
    const productQuantityAdd = (productId) => {
      //get index of product in cart
      const productIndex = this.props.cart.findIndex(
        (item) => item.id === productId
      );

      this.setState((prevState) => ({
        quantityAmount:
          prevState.quantityAmount + currencyCheck[productIndex][0].amount,
        quantity: prevState.quantity + 1,
      }));
    };

    //Product Remove Func
    const productQuantityRemove = (productId, index) => {
      const productIndex = this.props.cart.findIndex(
        (item) => item.id === productId
      );

      if (this.state.quantity > 1) {
        this.setState((prevState) => ({
          quantityAmount:
            prevState.quantityAmount - currencyCheck[productIndex][0].amount,
          quantity: prevState.quantity - 1,
        }));
      }
    };

    return (
      <div className={classes.cartContainer}>
        <button
          className={classes.removeBtn}
          onClick={itemRemoveHandler.bind(null, this.props.item.id)}
        >
          Remove
        </button>
        <div className={classes.productContainer}>
          <div className={classes.productDetails}>
            <h2>{this.props.item.name}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: this.props.item.description,
              }}
            ></p>
            <p>
              {symbol}
              {(
                priceResult[this.props.index] + this.state.quantityAmount
              ).toFixed(2)}
            </p>

            <div className={classes.productSizes}>
              {this.props.item.attributes[0].items.map((size, index) => (
                <SizeButton
                  onClick={btnActiveHandler.bind(null, index)}
                  className={
                    this.state.activeBtn === index
                      ? classes.cartActive
                      : classes.sizeBtnEmpty
                  }
                >
                  {size.displayValue}
                </SizeButton>
              ))}
            </div>
          </div>

          <div className={classes.rightContainer}>
            <div className={classes.rightButtons}>
              <button
                onClick={productQuantityAdd.bind(
                  null,
                  this.props.item.id,
                  this.props.index
                )}
              >
                +
              </button>
              <input
                type="text"
                name="quantity"
                value={this.state.quantity}
                maxlength="2"
                max="10"
                size="1"
                id="number"
              />

              <button
                onClick={productQuantityRemove.bind(
                  null,
                  this.props.item.id,
                  this.props.index
                )}
              >
                -
              </button>
            </div>
            <div className={classes.rightImage}>
              <img src={this.props.item.gallery[0]} alt="sweater" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    removeCartAction,
  };
};

const mapStateToProps = (state) => {
  return {
    cart: state.products.cart,
    price: state.products.price[0],
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(CartItem);
