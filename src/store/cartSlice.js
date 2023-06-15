import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addToCart(state, { payload }) {
      const newItem = payload;

      const duplicateItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (duplicateItem) {
        duplicateItem.quantity++;
        duplicateItem.totalPrice += newItem.price;
        state.totalQuantity++;
      } else {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          image: newItem.image,
        });
        state.totalQuantity++;
      }
    },
  },
  removeFromCart(state, { payload }) {
    const id = payload;
    const duplicatedItem = state.cartItems.find((item) => item.id === id);
    if (duplicatedItem.quantity === 1) {
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      state.totalQuantity--;
    } else {
      duplicatedItem.quantity--;
      duplicatedItem.totalPrice -= duplicatedItem.price;
      state.totalQuantity--;
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
