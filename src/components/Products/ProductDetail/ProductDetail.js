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
    activeBtn: false,
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
    //change amount by currenc
    // let zub = val[0].map((item) => item);
    //console.log(val);
    // this.setState({
    //   amount: this.state.filteredCurrency.map((item) => item.amount),
    // });
    // //add product to cart item
    // const addToCartHandler = () => {
    //this.props.cartAction(filteredData);
    //  alert("Product Added To Card");
    // };
    //Switch currency icon

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
              <h3>Running shorts</h3>
              <p>{item.description.replace(/(<([^>]+)>)/gi, "")}</p>
              <div className={classes.sizes}>
                <p>size</p>
                <div className={classes.btnGroup}>
                  {item.attributes.length > 0 ? (
                    item.attributes[0].items.map((size) => (
                      <SizeButton
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
              <button className={classes.cartBtn}>Cart</button>
              <p
                className={classes.description}
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              ></p>
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
