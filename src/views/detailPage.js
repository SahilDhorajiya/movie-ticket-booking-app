import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById } from "../redux/slice/movieSlice";
import { setBookingDetails } from "../redux/slice/bookingSlice";
import { TmdbImage } from "../components/TmdbImage";
import "../styles/movie.css";
const MovieDetails = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const movie = useSelector((state) => state.movies.movieDetails);
  const navigate = useNavigate();

  const handleBookTickets = () => {
    const totalPrice = 500 * ticketQuantity;
    dispatch(
      setBookingDetails({
        selectedMovie: movie,
        numberOfTickets: ticketQuantity,
        totalPrice,
      })
    );
    navigate("/booking-summary-page");
  };

  useEffect(() => {
    if (movieId) {
      let payload = {
        movieId: movieId,
      };
      dispatch(getMovieById(payload));
    }
  }, [movieId]);

  return (
    <div className="list-page-container p-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card ">
            <TmdbImage imagePath={movie?.poster_path} />
          </div>
        </div>
        <div className="col-md-8">
          <div className="card transparent-card">
            <div className="card-body ">
              <h2 className="card-title mb-4">{movie?.original_title}</h2>
              <div className="mb-3">
                <label htmlFor="ticketQuantity" className="form-label">
                  Number of Tickets
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="ticketQuantity"
                  value={ticketQuantity}
                  onChange={(e) => setTicketQuantity(e.target.value)}
                />
              </div>
              <p className="card-text">
                <strong>Genre:</strong>{" "}
                {movie?.genres?.map((Itm) => (
                  <span key={Itm?.id} className="badge bg-secondary me-2">
                    {Itm?.name}
                  </span>
                ))}
              </p>
              <p className="card-text">
                <strong>Release Date:</strong> {movie?.release_date}
              </p>
              <p className="card-text">
                <strong>Available Seats:</strong> 34
              </p>
              <p className="card-text">
                <strong>Ticket Price:</strong> Rs. 500
              </p>
              <button className="btn btn-primary" onClick={handleBookTickets}>
                Book Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
