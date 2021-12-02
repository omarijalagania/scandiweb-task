export const getProductsAction = (value) => {
  return {
    type: "GET_PRODUCTS",
    payload: value,
  };
};

export const SingleProductAction = (value) => {
  return {
    type: "SINGLE_PRODUCT",
    payload: value,
  };
};

export const getIdsAction = (value) => {
  return {
    type: "GET_ID",
    payload: value,
  };
};

export const getPrice = (value) => {
  return {
    type: "GET_PRICE",
    payload: value,
  };
};

export const cartAction = (value) => {
  return {
    type: "ADD_TO_CART",
    payload: value,
  };
};

export const removeCartAction = (value) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: value,
  };
};

export const totalPriceAction = (value) => {
  return {
    type: "TOTAL_PRICE",
    payload: value,
  };
};
export const quantityAction = (value) => {
  return {
    type: "QUANTITY",
    payload: value,
  };
};
