import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brands: [],
  firms: [],
  products: [],
  purchases: [],
  sales: [],
  categories: [],
  loading: false,
  error: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    getStocksSuccess: (state, { payload }) => {
        state.loading=false
        state[payload.url]=payload.newData
    },
    fetchFail: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const { fetchFail, fetchStart,getStocksSuccess } = stockSlice.actions;

export default stockSlice.reducer;
