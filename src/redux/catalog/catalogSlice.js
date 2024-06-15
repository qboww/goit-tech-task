import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://664d86d5ede9a2b55653caa3.mockapi.io";

export const fetchAdvert = createAsyncThunk(
  "catalog/fetchAdvert",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/Advert`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    items: [],
    isLoading: false,
    hasError: false,
    totalItems: 0,
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const car = action.payload;
      if (!state.favorites.find((item) => item.id === car.id)) {
        state.favorites.push(car);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (car) => car.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvert.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.hasError = false;
        state.totalItems = action.payload.length;
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
export const selectCatalogItems = (state) => state.catalog.items;
export const selectIsLoading = (state) => state.catalog.isLoading;
export const selectHasError = (state) => state.catalog.hasError;
export const selectFavorites = (state) => state.catalog.favorites;
export const selectTotalItems = (state) => state.catalog.totalItems;
export default catalogSlice.reducer;
