import React, { useContext } from 'react';

import { MovieDataContext } from '../App';

function TopMovies() {
  const { movies } = useContext(MovieDataContext);

  return (
    <>
      <h2>Top Movies</h2>
      <ol>
        {movies.slice(0, 3).map((movie, index) => (
          <li key={index}>
            {`${movie.title} $${movie.sum}m ${movie.favorite ? '💖' : '🖤'}`}
          </li>
        ))}
      </ol>
    </>
  );
}

export default TopMovies;
