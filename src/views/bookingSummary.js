import React from "react";
import { useSelector } from "react-redux";

const BookingSummary = () => {
  const { selectedMovie, numberOfTickets, totalPrice } = useSelector(
    (state) => state.booking
  );

  return (
    <div className="background-div p-5">
      <div className="card transparent-card p-4">
        <h2 className="mb-4">Booking Summary</h2>
        <div className="card-body ">
          <h5 className="card-title">Selected Movie</h5>
          <p className="card-text">{selectedMovie?.title}</p>
          <h5 className="card-title">Number of Tickets</h5>
          <p className="card-text">{numberOfTickets}</p>
          <h5 className="card-title">Total Price</h5>
          <p className="card-text">Rs.{totalPrice.toFixed(2)}</p>
          <p className="card-text text-success">Booking Confirmed</p>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
