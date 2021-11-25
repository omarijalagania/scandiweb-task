import React, { Component } from "react";

import { Link } from "react-router-dom";

import classes from "./Product.module.css";

import { currencySymbol } from "../ui/Symbol";

import { getIdsAction } from "../../redux/actions";
import { connect } from "react-redux";

export class Product extends Component {
  render() {
    //Filter Currency with chousen currency
    let filteredCurrency = this.props.product.prices.filter(
      (item) => item.currency == this.props.price
    );
    //change amount by currency
    let amount = filteredCurrency.map((item) => item.amount);

    //function to switch currency, locates at ui folder
    let symbol = currencySymbol(this.props.price);

    return (
      <Link
        onClick={() => this.props.getIdsAction(this.props.product.id)}
        to={
          this.props.product.inStock ? `/product/${this.props.product.id}` : ""
        }
      >
        <div
          className={`${classes.div1} ${
            this.props.product.inStock ? null : classes.disabled
          }`}
        >
          <img
            src={this.props.product.gallery[0]}
            alt={this.props.product.name}
          />
          {this.props.product.inStock ? null : (
            <div className={classes.outOfStock}>Out Of Stock</div>
          )}
          {this.props.product.inStock ? (
            <span className={classes.smallCart}>
              <img
                className={classes.cartCircle}
                src="/images/circle.png"
                alt="cart"
              />
            </span>
          ) : (
            ""
          )}
          <p className={classes.title}>{this.props.product.name}</p>
          <p className={classes.price}>
            {symbol}
            {amount}
          </p>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    price: state.products.price[0].currency,
  };
};

const mapDispatchToProps = () => {
  return {
    getIdsAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Product);
