const initialState = {
  id: "",
  data: [],
  price: ["USD"],
  cart: [],
  singleProduct: {},
  newCart: [],
  totalPrice: 0,
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

    case "SINGLE_PRODUCT":
      return {
        ...state,
        singleProduct: [action.payload],
      };
    case "GET_PRICE":
      return {
        ...state,
        price: action.payload,
      };
    case "TOTAL_PRICE":
      return {
        ...state,
        totalPrice: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: state.cart.concat(action.payload),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.newCart.concat(action.payload),
      };

    default:
      return state;
  }
};

export default ProductsReducer;
