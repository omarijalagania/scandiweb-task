import React, { Component } from "react";

import classes from "./ProductDetail.module.css";
import { connect } from "react-redux";

import { gql } from "@apollo/client";
import { client } from "../../../index";

import SizeButton from "../../ui/SizeButton";
import { currencySymbol } from "../../ui/Symbol";
import { cartAction } from "../../../redux/actions";

class ProductDetail extends Component {
  state = {
    activeBtn: "",
    path: window.location.pathname.replace("/product/", ""),
    singlePost: [],
    filteredCurrency: [],
    amount: 0,
  };

  async componentDidMount() {
    const response = await client.query({
      query: gql`
        query {
          product(id: "${this.state.path}") {
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
      `,
    });

    this.setState({ singlePost: [response.data.product] });
    //Filter Currency with chousen currency
  }

  render() {
    // //add product to cart item
    const addToCartHandler = () => {
      if (this.state.activeBtn !== "") {
        this.props.cartAction(this.state.singlePost);
        alert("Product Added To Card");
      } else {
        alert("Choose size");
      }
    };

    //active size btn
    const btnActiveHandler = (index) => {
      this.setState({ activeBtn: index });
      console.log(index);
    };

    let symbol = currencySymbol(this.props.price);

    return this.state.singlePost != "" ? (
      this.state.singlePost.map((item) => {
        return (
          <div key={item.id} className={classes.container}>
            <div className={classes.imageContainer}>
              <div className={classes.smallImages}>
                {item.gallery.slice(0, 3).map((image) => (
                  <img key={image} src={image} alt={item.name} />
                ))}
              </div>
              <div className={classes.bigImage}>
                <img
                  src={item.gallery !== "" ? item.gallery[0] : ""}
                  alt={item.description}
                />
              </div>
            </div>
            <div className={classes.productDetailsConteiner}>
              <h2>{item.name}</h2>
              <h3>{item.brand}</h3>
              <p
                className={classes.description}
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              ></p>
              <div className={classes.sizes}>
                <p>size</p>
                <div className={classes.btnGroup}>
                  {item.attributes.length > 0 ? (
                    item.attributes[0].items.map((size, index) => (
                      <SizeButton
                        onClick={btnActiveHandler.bind(null, index)}
                        className={
                          this.state.activeBtn === index
                            ? classes.sizeBtnActive
                            : classes.sizeBtnEmpty
                        }
                        value={size.displayValue}
                        key={size.displayValue}
                      >
                        {size.displayValue}
                      </SizeButton>
                    ))
                  ) : (
                    <p>No Attributes</p>
                  )}
                </div>
              </div>
              <p className={classes.price}>Price</p>
              <p className={classes.priceAmount}>
                {symbol}
                {item.prices.map((cur) => {
                  if (cur.currency === this.props.price) {
                    return <> {cur.amount} </>;
                  }
                })}
              </p>
              <button onClick={addToCartHandler} className={classes.cartBtn}>
                Cart
              </button>
            </div>
          </div>
        );
      })
    ) : (
      <p>Loading...</p>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    singleProduct: state.products.singleProduct,
    id: state.products.id,
    price: state.products.price[0],
  };
};

const mapDispatchToProps = () => {
  return {
    cartAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ProductDetail);
