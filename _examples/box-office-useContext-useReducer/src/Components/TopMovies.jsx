import React, { useContext } from 'react';

import { MovieDataContext } from '../MovieDataProvider';

function TopMovies() {
  const { movies } = useContext(MovieDataContext);

  return (
    <>
      <h2>Top Movies</h2>
      <ol>
        {movies.slice(0, 3).map((movie) => (
          <li key={movie.id}>
            {`${movie.title} $${movie.sum}m ${movie.favorite ? '💖' : '🖤'}`}
          </li>
        ))}
      </ol>
    </>
  );
}

export default TopMovies;
