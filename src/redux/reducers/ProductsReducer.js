const initialState = {
  id: "",
  data: [],
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ID":
      return {
        ...state,
        id: action.payload,
      };

    case "GET_PRODUCTS":
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default ProductsReducer;
