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
