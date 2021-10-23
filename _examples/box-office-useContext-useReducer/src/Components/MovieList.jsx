import React, { useContext } from 'react';

import MovieCard from './MovieCard';

import { MovieDataContext } from '../MovieDataProvider';

function MovieList({ 'card-width': cardWidth }) {
  const { movies } = useContext(MovieDataContext);

  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <ul style={{ display: 'flex', gap: '1em', flexWrap: 'wrap' }}>
        {movies.map((movie, index) => (
          <li key={movie.id} style={{ listStyleType: 'none', width: `${cardWidth}px` }}>
            <MovieCard movie={movie} width={cardWidth} seed={index + 1} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
