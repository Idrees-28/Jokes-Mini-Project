import { configureStore } from "@reduxjs/toolkit";
import jokeSlice from "./jokeSlice";

const store = configureStore({
  reducer: {
    joke: jokeSlice.reducer,
  },
});

export default store;