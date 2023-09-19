// slices/movieSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk to fetch movies from the API
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=77e1933546df4685706f2f13795938c9"
  );
  return response.data.results;
});
export const getMovieById = createAsyncThunk(
  "movies/getMovieById",
  async (payload) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${payload?.movieId}?api_key=77e1933546df4685706f2f13795938c9`
    );
    return response?.data;
  }
);
// https://api.themoviedb.org/3/movie/${movieId}?api_key=YOUR_API_KEY
// Create the movie slice
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movieDetails: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(getMovieById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovieById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movieDetails = action.payload;
      })
      .addCase(getMovieById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
