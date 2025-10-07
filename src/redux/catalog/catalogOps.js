import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://664d86d5ede9a2b55653caa3.mockapi.io";

export const fetchAdvert = createAsyncThunk(
  "catalog/fetchAdvert",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/Clothes`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
