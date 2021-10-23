import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

import { MovieDataContext } from '../App';

function MovieList({ 'card-width': cardWidth }) {
  const { movies } = useContext(MovieDataContext);

  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <ul style={{ display: 'flex', gap: '1em', flexWrap: 'wrap' }}>
        {movies.map((movie, index) => (
          <li
            key={index}
            style={{ listStyleType: 'none', width: `${cardWidth}px` }}
          >
            <MovieCard movie={movie} width={cardWidth} seed={index + 1} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* MovieList.propTypes = {
  'card-width': PropTypes.number.isRequired,
}; */

export default MovieList;
