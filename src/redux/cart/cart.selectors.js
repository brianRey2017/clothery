import { createSelector } from "reselect";

/*
- THERE ARE TWO TYPES OF SELECTORS, INPUT SELECTORS AND OUTPUT SELECTORS (INPUT + CREATE_SELECTOR)
- THE INPUT SELECTORS GET A STATE AND RETURNS A PART OF IT
*/

const selectCart = ({ cart }) => cart;

export const selectCartVisibility = createSelector(
  [selectCart],
  (cart) => cart.show
);

// THE ORDER OF THE ARGS THE FUNCTION RECEIVES IS BASED IN THE INPUT SELECTORS
export const selectCartItems = createSelector([selectCart], (cart) =>
  Object.values(cart.items)
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    Object.values(cartItems).reduce(
      (total, { quantity }) => total + quantity,
      0
    )
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    Object.values(cartItems).reduce(
      (total, { price, quantity }) => total + quantity * price,
      0
    )
);
