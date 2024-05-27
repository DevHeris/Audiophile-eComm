import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.cart.push(action.payload);
    },
    removeProduct(state, action) {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload,
      );
    },
    increaseProductQuantity(state, action) {
      const product = state.cart.find(
        (product) => product.id === action.payload,
      );
      product.quantity++;
      product.totalPrice = product.quantity * product.price;
    },
    decreaseProductQuantity(state, action) {
      const product = state.cart.find(
        (product) => product.id === action.payload,
      );
      product.quantity--;
      product.totalPrice = product.quantity * product.price;

      if (product.quantity === 0)
        cartSlice.caseReducers.removeProduct(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  increaseProductQuantity,
  decreaseProductQuantity,
  clearCart,
  addProduct,
  removeProduct,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;
