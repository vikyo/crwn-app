import { createSelector } from "reselect";

// Basic syntax
// createSelector([<array of redux state>], ()=>{})

// Function to select the cart from redux state
const selectCart = (state) => {
  return state.cart;
};

// Function to select the hidden property of the cart state
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden //using function syntax without return keyword
);

// Function to select the cart items from the above fetched cart
export const selectCartItems = createSelector([selectCart], (cart) => {
  return cart.cartItems;
});

// Function to count the quantity of an item from the cart items
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    }, 0);
  }
);
