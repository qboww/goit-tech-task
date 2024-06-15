import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { fetchAdvert } from "./catalogOps";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    items: [],
    isLoading: false,
    hasError: false,
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const car = action.payload;
      if (!state.favorites) {
        state.favorites = [];
      }
      if (!state.favorites.find((item) => item.id === car.id)) {
        state.favorites.push(car);
      }
    },
    removeFromFavorites: (state, action) => {
      if (state.favorites) {
        state.favorites = state.favorites.filter(
          (car) => car.id !== action.payload.id
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvert.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(fetchAdvert.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchAdvert.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        toast.error("Something went wrong");
      });
  },
});

export const { addToFavorites, removeFromFavorites } = catalogSlice.actions;
export default catalogSlice.reducer;
