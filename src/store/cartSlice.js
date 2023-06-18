import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state, action) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
    addToCart(state, action) {
      if (
        state.cartItems.findIndex((item) => item._id === action.payload._id) !==
        -1
      ) {
        const index = state.cartItems.findIndex(
          (item) => item._id === action.payload._id
        );
        state.cartItems[index].quantity++;
      } else {
        action.payload.quantity = 1;
        state.cartItems.push(action.payload);
      }
      state.totalPrice = Number(
        (state.totalPrice + action.payload.price).toFixed(2)
      );
      state.totalQuantity++;
    },

    removeFromCart(state, action) {
      const results = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (results.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
      } else {
        results.quantity--;
      }
      state.totalQuantity--;
      state.totalPrice = Number((state.totalPrice - results.price).toFixed(2));
    },
    
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
