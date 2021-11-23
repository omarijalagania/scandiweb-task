import React, { Component } from "react";

import { gql } from "@apollo/client";
import { GET_CATEGORY } from "../../data/Queries";
import { client } from "../../index";

import classes from "./Products.module.css";
import Product from "./Product";

import { connect } from "react-redux";
import { getProductsAction } from "../../redux/actions/";

export class Products extends Component {
  componentDidMount = async () => {
    client
      .query({
        query: gql`
          ${GET_CATEGORY}
        `,
      })
      .then((result) =>
        this.props.getProductsAction(result.data.category.products)
      );
  };

  render() {
    return (
      <div className={classes.parent}>
        {this.props.products ? (
          this.props.products.map((product) => {
            return <Product key={product.id} product={product} />;
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.data,
  };
};

const mapDispatchToProps = () => {
  return {
    getProductsAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Products);
