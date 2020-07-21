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

export const removeItemFromCart = (cartItemsArray, itemId) => {
  return cartItemsArray.filter((cartItem) => cartItem.id !== itemId);
};

export const decreaseItemFromCart = (cartItemsArray, cartItemToRemove) => {
  // find the item to remove in the cart
  const existingCartItem = cartItemsArray.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // if found and check if the quantity is 1 then remove the item entirely from cart
  if (existingCartItem.quantity === 1) {
    return cartItemsArray.filter(
      (cartItem) => cartItem.id !== cartItemToRemove.id
    );
  }

  // if found and quantity > 1 then iterate over cart items array and decrease the quantity by 1 each time
  return cartItemsArray.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
