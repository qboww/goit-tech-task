// src/redux/catalog/catalogOps.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://664d86d5ede9a2b55653caa3.mockapi.io";

export const fetchAdvert = createAsyncThunk(
  "advert/fetch",
  async ({ page = 1, limit = 12 }, thunkAPI) => {
    try {
      const response = await axios.get(`/Advert`, {
        params: { page, limit },
      });
      const totalItemsResponse = await axios.get(`/Advert`);
      const totalItems = totalItemsResponse.data.length;
      return { data: response.data, page, totalItems };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
