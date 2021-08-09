export const addItemToCart = (cartItems, cartItemToAdd) => {
  if (cartItemToAdd.id in cartItems) {
    const { quantity, ...existingCartItem } = cartItems[cartItemToAdd.id];
    const updatedCartItem = { ...existingCartItem, quantity: quantity + 1 };
    return {
      ...cartItems,
      [cartItemToAdd.id]: updatedCartItem,
    };
  }
  return {
  ...cartItems,
    [cartItemToAdd.id]: { ...cartItemToAdd, quantity: 1 },
  };
};

export const removeItemFromCart = (cartItems, itemToRemoveId) => {
  if (itemToRemoveId in cartItems) {
    const copy = { ...cartItems };
    delete(copy[itemToRemoveId]);
    return copy;
  } else {
    throw new Error("The element does not exists in cart");
  }
};
