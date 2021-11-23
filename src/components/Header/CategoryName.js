import React, { Component } from "react";

import { connect } from "react-redux";

export class CategoryName extends Component {
  render() {
    return (
      <h1 style={{ marginTop: "80px" }}>
        {this.props.products ? console.log(this.props.products) : ""}
      </h1>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.data,
  };
};

export default connect(mapStateToProps)(CategoryName);
