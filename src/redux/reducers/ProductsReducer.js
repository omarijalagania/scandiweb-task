const initialState = {
  data: [],
  id: "",
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        data: action.payload,
      };
    case "GET_ID":
      return { id: action.payload };

    default:
      return state.data;
  }
};

export default ProductsReducer;
