export const SET_PRODUCT = "SET_PRODUCT";
export const SELECTED_PRODUCT = "SELECTED_PRODUCT";
export const REMOVE_PRODUCT = " REMOVE_PRODUC";

export const setProduct = (products) => {
  return {
    type: SET_PRODUCT,
    payload: products,
  };
};

export const selectedproduct = (products_Selected_Data) => {
  return {
    type: SELECTED_PRODUCT,
    payload: products_Selected_Data,
  };
};
