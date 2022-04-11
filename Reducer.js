import { SELECTED_PRODUCT, SET_PRODUCT } from "./Action";

const intialState = {
  products: [],
};
const purchase_Product_cart = {
  productsItem: 0,
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
export const purchase_Reducer = (state = purchase_Product_cart, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return {
        ...state,
        productsItem: state.productsItem + 1,
      };

    default:
      return state;
      break;
  }
};
