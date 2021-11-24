import React, { Component } from "react";

import { Link } from "react-router-dom";

import classes from "./Product.module.css";

import { getIdsAction } from "../../redux/actions";
import { connect } from "react-redux";

export class Product extends Component {
  render() {
    return (
      <Link
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
              <img src="/images/circle.png" alt="cart" />
            </span>
          ) : (
            ""
          )}
          <p className={classes.title}>{this.props.product.name}</p>
          <p className={classes.price}>
            $ {this.props.product.prices[0].amount}
          </p>
        </div>
      </Link>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    getIdsAction,
  };
};

export default connect(mapDispatchToProps)(Product);
