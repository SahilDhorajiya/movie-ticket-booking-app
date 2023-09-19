import React, { useEffect } from "react";
import "../styles/movie.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/slice/movieSlice";
import { TmdbImage } from "../components/TmdbImage";

const ListPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="list-page-container">
      <div className="transparent-card">
        <h2 className="text-center mb-4 custom-text-color">Movie List</h2>
        <div className="row p-5 ">
          {movies?.map((movie) => (
            <div className="col-md-3 mb-4" key={movie.id}>
              <div>
                <TmdbImage imagePath={movie?.poster_path} height={300} />
                <div className="card-body">
                  <h5 className="card-title text-white">{movie.title}</h5>
                  <p className="card-text text-white">
                    <strong>Genres:</strong>{" "}
                    {movie?.genres?.map((genre) => genre.name).join(", ")}
                  </p>
                  <p className="card-text text-white">
                    <strong>Release Date:</strong> {movie?.release_date}
                  </p>
                  <Link
                    to={`/detailPage/${movie.id}`}
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListPage;
