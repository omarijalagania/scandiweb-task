import React, { Component } from "react";

import { gql } from "@apollo/client";
import { GET_CATEGORY } from "../../data/Queries";
import { client } from "../../index";

import classes from "./Products.module.css";

import Product from "./Product";

export class Products extends Component {
  state = {
    products: [],
  };

  componentDidMount = async () => {
    client
      .query({
        query: gql`
          ${GET_CATEGORY}
        `,
      })
      .then((result) =>
        this.setState({ products: result.data.category.products })
      );
  };

  render() {
    return (
      <div className={classes.parent}>
        {this.state.products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    );
  }
}

export default Products;
