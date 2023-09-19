// store.js
import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../slice/movieSlice";
import bookingSlice from "../slice/bookingSlice";
// import movieReducer from "./movieSlice";
// import bookingReducer from "./bookingSlice";

const store = configureStore({
  reducer: {
    movies: movieSlice,
    booking: bookingSlice,
  },
});

export default store;
