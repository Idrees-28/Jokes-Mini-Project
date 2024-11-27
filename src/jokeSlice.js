import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchJoke = createAsyncThunk("jokes/jokecategory", async (category) => {
  return axios
    .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((result) => {
      return result.data.value;
    });
});

const initialState = {
  joke: "",
};

const jokeSlice = createSlice({
  name: "joke",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJoke.pending, () => {
        console.log("Loading...");
      })
      .addCase(fetchJoke.fulfilled, (state, action) => {
        state.joke = action.payload;
      });
  },
});

export default jokeSlice;
export { fetchJoke };
