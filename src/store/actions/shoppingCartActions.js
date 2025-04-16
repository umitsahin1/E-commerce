export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const SET_SELECTED_ITEMS = "SET_SELECTED_ITEMS";

export const setCart = (cart) => {
  localStorage.setItem("cartItems", JSON.stringify(cart));
  return {
    type: SET_CART,
    payload: cart,
  };
};

export const setSelectedItems = (selectedItems) => {
  localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
  return {
    type: SET_SELECTED_ITEMS,
    payload: selectedItems,
  };
};

export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});
export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});
