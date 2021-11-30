import React, { Component } from "react";

import classes from "./Currency.module.css";

import { gql } from "@apollo/client";
import { client } from "../../index";

import { connect } from "react-redux";
import { getPrice } from "../../redux/actions";

export class Currency extends Component {
  state = {
    currency: [],
  };

  componentDidMount = async () => {
    const response = await client.query({
      query: gql`
        query {
          currencies
        }
      `,
    });
    this.setState({ currency: response.data.currencies });
  };

  render() {
    //Price Handler Function for Dispatch currency
    const priceHandler = (currency = "USD") => {
      if (currency === "USD") {
        const filter = this.state.currency.filter((item) => item === "USD");
        this.props.getPrice(filter);
      }
      if (currency === "GBP") {
        const filter = this.state.currency.filter((item) => item === "GBP");
        this.props.getPrice(filter);
      }
      if (currency === "AUD") {
        const filter = this.state.currency.filter((item) => item === "AUD");
        this.props.getPrice(filter);
      }
      if (currency === "JPY") {
        const filter = this.state.currency.filter((item) => item === "JPY");
        this.props.getPrice(filter);
      }
      if (currency === "RUB") {
        const filter = this.state.currency.filter((item) => item === "RUB");
        this.props.getPrice(filter);
      }
    };
    return (
      <div className={classes.main}>
        {this.state.currency.map((price) => {
          return (
            <p
              onClick={priceHandler.bind(null, price)}
              key={price}
              className={classes.currency}
            >
              {price}
            </p>
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    getPrice,
  };
};

export default connect(null, mapDispatchToProps())(Currency);
