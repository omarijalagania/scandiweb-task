import React, { Component } from "react";

import { connect } from "react-redux";

import CategoryName from "../ui/CategoryName";
import Product from "./Product";

import { gql } from "@apollo/client";
import { client } from "../../index";

import classes from "./Products.module.css";

export class Category extends Component {
  state = {
    data: [],
    path: "",
  };
  componentDidMount = async () => {
    const response = await client.query({
      query: gql`
        query {
          category {
            products {
              name
              id
              gallery
              category
              inStock
              attributes {
                id
                name
                type
                items {
                  displayValue
                  value
                  id
                }
              }
              description
              brand
              prices {
                currency
                amount
              }
            }
          }
        }
      `,
    });
    this.setState({ data: response.data.category.products });
    this.setState({ path: window.location.pathname.replace("/", "") });
  };

  render() {
    const filtered = this.state.data.filter(
      (item) => item.category === this.state.path
    );

    return (
      <>
        <CategoryName>{this.state.path}</CategoryName>
        <div className={classes.parent}>
          {filtered.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.data,
  };
};

export default connect(mapStateToProps)(Category);
