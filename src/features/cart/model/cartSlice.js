import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: { items: [] }, // [{id,title,price,image,qty}]
  reducers: {
    addToCart: (state, { payload }) => {
      const exist = state.items.find((i) => i.id === payload.id);
      if (exist) exist.qty += 1;
      else state.items.push({ ...payload, qty: 1 });
    },
    removeFromCart: (state, { payload: id }) => {
      state.items = state.items.filter((i) => i.id !== id);
    },
    changeQty: (state, { payload: { id, qty } }) => {
      const it = state.items.find((i) => i.id === id);
      if (it) it.qty = Math.max(1, Number(qty) || 1);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, changeQty, clearCart } =
  slice.actions;
export default slice.reducer;
