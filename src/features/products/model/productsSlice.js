import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts, getProduct } from "../api/productsApi.js";

export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  return await getProducts();
});

export const fetchProductById = createAsyncThunk(
  "products/fetchOne",
  async (id) => {
    return await getProduct(id);
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: { items: [], current: null, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.current = action.payload;
      });
  },
});

export default productsSlice.reducer;
