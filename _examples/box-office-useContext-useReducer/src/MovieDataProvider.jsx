import React, { createContext, useReducer, useState, useContext } from 'react';

import movieData from './movies.json';

export const MovieDataContext = createContext();
export const useMovieData = () => useContext(MovieDataContext);

function MovieDataProvider({ children }) {
  /* const [movies, setFavorite] = useReducer(
    (prevState, { id, favorite }) =>
      prevState.map((movie) => (movie.id === id ? { ...movie, favorite } : movie)),
    movieData,
  ); */

  const [movies, setMovies] = useState(movieData);
  const setFavorite = ({ id, favorite }) => {
    setMovies(movies.map((movie) => (movie.id === id ? { ...movie, favorite } : movie)));
  };

  return (
    <MovieDataContext.Provider value={{ movies, setFavorite }}>
      {children}
    </MovieDataContext.Provider>
  );
}

export default MovieDataProvider;
