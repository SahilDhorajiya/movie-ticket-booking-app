import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    selectedMovie: null,
    numberOfTickets: 0,
    totalPrice: 0,
  },
  reducers: {
    setBookingDetails: (state, action) => {
      const { selectedMovie, numberOfTickets, totalPrice } = action.payload;
      state.selectedMovie = selectedMovie;
      state.numberOfTickets = numberOfTickets;
      state.totalPrice = totalPrice;
    },
  },
});

export const { setBookingDetails } = bookingSlice.actions;
export default bookingSlice.reducer;
