import React, { Component } from "react";

export class CategoryName extends Component {
  render() {
    return (
      <h1 style={{ width: "1238px", margin: "80px auto" }}>
        {this.props.children}
      </h1>
    );
  }
}

export default CategoryName;
