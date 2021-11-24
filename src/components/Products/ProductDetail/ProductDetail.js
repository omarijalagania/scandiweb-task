import React, { Component } from "react";

import classes from "./ProductDetail.module.css";

import { connect } from "react-redux";
import SizeButton from "../../ui/SizeButton";

class ProductDetail extends Component {
  render() {
    const filteredData = this.props.products.filter(
      (arr) => arr.id === this.props.id
    );
    console.log(filteredData);
    return filteredData.map((item) => {
      return (
        <div className={classes.container}>
          <div className={classes.imageContainer}>
            <div className={classes.smallImages}>
              <img src="/images/sweater.jpeg" alt="sweater" />
              <img src="/images/sweater.jpeg" alt="sweater" />
              <img src="/images/sweater.jpeg" alt="sweater" />
            </div>
            <div className={classes.bigImage}>
              <img src="/images/sweater.jpeg" alt="sweater" />
            </div>
          </div>
          <div className={classes.productDetailsConteiner}>
            <h2>{item.name}</h2>
            <h3>Running shorts</h3>
            <div
              className={classes.sizes}
              dangerouslySetInnerHTML={{ __html: `${item.description}` }}
            />
            <div className={classes.sizes}>
              <p>size</p>
              <div className={classes.btnGroup}>
                <SizeButton className={classes.sizeBtnActive}>XS</SizeButton>
                <SizeButton>X</SizeButton>
                <SizeButton>M</SizeButton>
                <SizeButton>L</SizeButton>
              </div>
            </div>
            <p className={classes.price}>Price</p>
            <p className={classes.priceAmount}>$50.00</p>
            <button className={classes.cartBtn}>Cart</button>
            <p className={classes.description}>
              dsfsdfdsfsdfsdsdsdfsdsdffsfssks;lflkssfksdkjfsdjflsjf
              sfsdfsdfsdlfksdflkjsdfjdsjfsdljfsjdlfk
              skdfslkjdfskljfskljflksjdflkjsfjklsdkfljslkjfsjkf
            </p>
          </div>
        </div>
      );
    });
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.data,
    id: state.products.id,
  };
};

export default connect(mapStateToProps)(ProductDetail);
