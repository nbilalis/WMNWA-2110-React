import React, { useState, createContext } from 'react';

import TopMovies from './Components/TopMovies';
import MovieList from './Components/MovieList';

import movieData from './movies.json';

export const MovieDataContext = createContext();

function App() {
  const [movies, setMovies] = useState(movieData);

  return (
    <>
      <h1>Box Office</h1>
      <MovieDataContext.Provider value={{ movies, setMovies }}>
        <TopMovies />
        <MovieList card-width="200" />
      </MovieDataContext.Provider>
    </>
  );
}

export default App;
