const initialState = {
  data: [],
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        data: action.payload,
      };
    default:
      return state.data;
  }
};

export default ProductsReducer;
