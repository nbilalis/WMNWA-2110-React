import React from 'react';

import MovieDataProvider from './MovieDataProvider';

import TopMovies from './Components/TopMovies';
import MovieList from './Components/MovieList';

function App() {
  return (
    <>
      <h1>Box Office</h1>
      <MovieDataProvider>
        <TopMovies />
        <MovieList card-width="200" />
      </MovieDataProvider>
    </>
  );
}

export default App;
