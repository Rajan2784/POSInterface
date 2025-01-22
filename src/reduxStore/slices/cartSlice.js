import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    payment: {},
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      state.cartItems.push(action.payload.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    addAmountPaid: (state, action) => {
      state.payment = action.payload;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.payment = {};
    },
  },
});

export const { addToCart, removeFromCart, addAmountPaid,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
