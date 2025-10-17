import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/model/productsSlice.js";
import cartReducer from "../features/cart/model/cartSlice.js";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
