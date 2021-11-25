export const getProductsAction = (value) => {
  return {
    type: "GET_PRODUCTS",
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
