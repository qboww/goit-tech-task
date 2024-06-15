// src/redux/catalog/catalogSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchAdvert } from "./catalogOps";
import toast from "react-hot-toast";

const initialState = {
  catalog: {
    items: [],
    isLoading: false,
    hasError: false,
    page: 1,
    totalItems: 0,
  },
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvert.fulfilled, (state, { payload }) => {
        if (payload.page === 1) {
          state.catalog.items = payload.data;
        } else {
          state.catalog.items = [...state.catalog.items, ...payload.data];
        }
        state.catalog.isLoading = false;
        state.catalog.hasError = false;
        state.catalog.page = payload.page;
        state.catalog.totalItems = payload.totalItems;
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

export const selectCatalogItems = (state) => state.catalog.catalog.items;
export const selectIsLoading = (state) => state.catalog.catalog.isLoading;
export const selectHasError = (state) => state.catalog.catalog.hasError;
export const selectTotalItems = (state) => state.catalog.catalog.totalItems;

export const catalogReducer = catalogSlice.reducer;
