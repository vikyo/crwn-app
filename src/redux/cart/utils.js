export const addItemToCart = (cartItemsArray, cartItemToAdd) => {
  // Check if the item already exist in the cartItems array
  const existingCartItem = cartItemsArray.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // If Item exists then check for which item the quantity needs to be increased
  if (existingCartItem) {
    return cartItemsArray.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // If Items does not exist
  return [...cartItemsArray, { ...cartItemToAdd, quantity: 1 }];
};
