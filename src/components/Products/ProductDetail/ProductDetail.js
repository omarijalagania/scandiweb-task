import React, { Component } from "react";

import classes from "./ProductDetail.module.css";

import { connect } from "react-redux";
import SizeButton from "../../ui/SizeButton";

class ProductDetail extends Component {
  render() {
    //Grab Prodict Object by id
    const filteredData = this.props.products.filter(
      (arr) => arr.id === this.props.id
    );
    //Filter Currency with chousen currency
    let filteredCurrency = filteredData[0].prices.filter(
      (item) => item.currency == this.props.price
    );
    //change amount by currency
    let amount = filteredCurrency.map((item) => item.amount);
    let symbol = "";
    //Switch currency icon
    switch (this.props.price) {
      case "USD":
        symbol = "$";
        break;
      case "GBP":
        symbol = "£";
        break;
      case "AUD":
        symbol = "$";
        break;
      case "JPY":
        symbol = "¥";
        break;
      case "RUB":
        symbol = "₽";
        break;
      default:
        symbol = "$";
    }
    console.log(filteredData);
    return filteredData.map((item) => {
      return (
        <div className={classes.container}>
          <div className={classes.imageContainer}>
            <div className={classes.smallImages}>
              {item.gallery.slice(0, 3).map((image) => (
                <img src={image} alt={item.name} />
              ))}
            </div>
            <div className={classes.bigImage}>
              <img src={item.gallery[0]} alt={item.description} />
            </div>
          </div>
          <div className={classes.productDetailsConteiner}>
            <h2>{item.name}</h2>
            <h3>Running shorts</h3>
            <p>{item.description.replace(/(<([^>]+)>)/gi, "")}</p>
            <div className={classes.sizes}>
              <p>size</p>
              <div className={classes.btnGroup}>
                {item.attributes.length > 0 ? (
                  item.attributes[0].items.map((size) => (
                    <SizeButton>{size.displayValue}</SizeButton>
                  ))
                ) : (
                  <p>No Attributes</p>
                )}
              </div>
            </div>
            <p className={classes.price}>Price</p>
            <p className={classes.priceAmount}>
              {symbol}
              {amount}
            </p>
            <button className={classes.cartBtn}>Cart</button>
            <p className={classes.description}>
              {item.description.replace(/(<([^>]+)>)/gi, "")}
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
    price: state.products.price[0].currency,
  };
};

export default connect(mapStateToProps)(ProductDetail);