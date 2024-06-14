// src/redux/catalog/catalogSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchAdvert } from "./catalogOps";
import toast from "react-hot-toast";

const initialState = {
  catalog: {
    items: [],
    isLoading: false,
    hasError: false,
  },
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvert.fulfilled, (state, { payload }) => {
        state.catalog.items = payload;
        state.catalog.isLoading = false;
        state.catalog.hasError = false;
      })
      .addCase(fetchAdvert.pending, (state) => {
        state.catalog.isLoading = true;
        state.catalog.hasError = false;
      })
      .addCase(fetchAdvert.rejected, (state) => {
        state.catalog.isLoading = false;
        state.catalog.hasError = true;
        toast.error("Something went wrong");
      });
  },
});

// Selectors
export const selectCatalogItems = (state) => state.catalog.catalog.items;
export const selectIsLoading = (state) => state.catalog.catalog.isLoading;
export const selectHasError = (state) => state.catalog.catalog.hasError;

export const catalogReducer = catalogSlice.reducer;
