import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(item => item.friedRiceId !== action.payload);
    },
    deleteAllItem(state) {
      state.cart = [];
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find(eachItem => eachItem.friedRiceId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find(eachItem => eachItem.friedRiceId === action.payload);

      if(item.quantity === 1) return;

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    }
  }
})

export function getCurrentQuantity(id) {
  return (state) => state.cart.cart.find(item => item.friedRiceId === id)?.quantity ?? 0;
}

export default cartSlice.reducer;
export const {addItem, deleteItem, deleteAllItem, increaseItemQuantity, decreaseItemQuantity} = cartSlice.actions;