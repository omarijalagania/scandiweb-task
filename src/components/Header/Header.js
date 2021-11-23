import React, { Component } from "react";
import { CartOutline } from "react-ionicons";
import classes from "./Header.module.css";

import CategoryName from "./CategoryName";

import { ChevronUpOutline } from "react-ionicons";
import { ChevronDownOutline } from "react-ionicons";

export class Header extends Component {
  state = {
    currencyToggle: false,
  };

  toggleHandler = () => {
    this.setState({ currencyToggle: !this.state.currencyToggle });
  };

  render() {
    return (
      <div className={classes.mainContainer}>
        <nav className={classes.nav}>
          <ul className={classes.list}>
            <li className={classes.links}>Woman</li>
            <li className={classes.links}>Men</li>
            <li className={classes.links}>Kids</li>
          </ul>

          <img
            className={classes.greenCart}
            src="/images/cart.png"
            height="30px"
            width="30px"
            alt="cart"
          />

          <div className={classes.cartContainer}>
            <div className={classes.currency} onClick={this.toggleHandler}>
              <img src="/images/dollar.png" alt="dollar" />
              {this.state.currencyToggle ? (
                <ChevronUpOutline color={"#00000"} height="23px" width="18px" />
              ) : (
                <ChevronDownOutline
                  color={"#00000"}
                  height="23px"
                  width="18px"
                />
              )}
            </div>

            <CartOutline color={"#00000"} height="20px" width="18px" />
          </div>
        </nav>
        <CategoryName />
      </div>
    );
  }
}

export default Header;
