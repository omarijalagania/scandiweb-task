import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import classes from "./Cart.module.css";
import { currencySymbol } from "../ui/Symbol";
import OverLay from "../ui/OverLay";
import SizeButton from "../ui/SizeButton";

import { removeCartAction } from "../../redux/actions";

export class Cart extends Component {
  state = {
    totalPrice: 0,
    quantity: 1,
    items: [0],
    quantityAmount: 0,
  };

  //remove item from cart
  itemRemoveHandler = (productId) => {
    const removedItem = this.props.cart.filter((item) => item.id !== productId);
    this.props.removeCartAction(removedItem);
    console.log(removedItem);
  };

  render() {
    let symbol = currencySymbol(this.props.price);

    //check currency with Header currency
    const currencyCheck = this.props.cart.map((item) =>
      item.prices.filter((item) => item.currency === this.props.price)
    );

    // console.log(currencyCheck[0]);
    //extract price arrays from array
    const extractFromArr = currencyCheck.map(
      (item) => item[item.map((item, index) => index)]
    );

    //final result
    const PriceResult = extractFromArr.map((item) => item.amount);
    console.log(PriceResult);
    //total summ
    const total =
      PriceResult.length !== 0
        ? PriceResult.reduce(
            (a, b) => 1 * a + 1 * b //products sum
          )
        : 0;

    // Product Add Func
    const productQuantityAdd = (productId, index) => {
      //get index of product in cart
      const productIndex = this.props.cart.findIndex(
        (item) => item.id === productId
      );
      // save price to state
      if (productIndex === index) {
        this.setState((prevState) => ({
          quantityAmount:
            prevState.quantityAmount + currencyCheck[productIndex][0].amount,
        }));
      }

      //add quantity for item number
      this.setState({
        items: [...this.state.items, "count"],
      });
    };

    //Product Remove Func
    const productQuantityRemove = (productId) => {
      const productIndex = this.props.cart.findIndex(
        (item) => item.id === productId
      );
      if (this.state.items.length > 1) {
        this.setState((prevState) => ({
          quantityAmount:
            prevState.quantityAmount - currencyCheck[productIndex][0].amount,
        }));

        this.setState({
          items: this.state.items.splice(1),
        });
      }
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
                <>
                  <button onClick={this.itemRemoveHandler.bind(null, item.id)}>
                    remove
                  </button>
                  <div key={item.id} className={classes.itemContainer}>
                    <div className={classes.itemDescription}>
                      <p>{item.name}</p>

                      <p>
                        {symbol}
                        {PriceResult[index]}
                      </p>
                      <div className={classes.sizes}>
                        {item.attributes.length > 0 ? (
                          item.attributes[0].items.map((size) => (
                            <SizeButton
                              className={classes.cartBtn}
                              value={size.displayValue}
                              key={size.displayValue}
                            >
                              {size.displayValue}
                            </SizeButton>
                          ))
                        ) : (
                          <p style={{ fontWeight: "700" }}>No Attributes</p>
                        )}
                      </div>
                    </div>

                    <div className={classes.quantity}>
                      <button
                        onClick={productQuantityAdd.bind(null, item.id, index)}
                      >
                        +
                      </button>
                      <p>{this.state.items.length}</p>
                      <button
                        onClick={productQuantityRemove.bind(null, item.id)}
                      >
                        -
                      </button>
                    </div>
                    <div className={classes.imagePreview}>
                      <img src={item.gallery[0]} alt={item.name} />
                    </div>
                  </div>
                </>
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
