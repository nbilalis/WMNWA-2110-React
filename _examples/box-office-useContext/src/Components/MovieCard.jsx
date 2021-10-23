import React, { useContext } from 'react';

import { MovieDataContext } from '../App';

function MovieCard({ movie, width, seed }) {
  const { movies, setMovies } = useContext(MovieDataContext);

  function toggleFavorite() {
    setMovies(
      movies.map(m => (m.title === movie.title ? { ...movie, favorite: !movie.favorite } : m)),
    );
  }

  return (
    <>
      <img src={`https://picsum.photos/${width}/${width * 1.5}?random=${seed}`} width={width} height={width * 1.5} alt={movie.title} />
      <div className="movie-title" style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
        {movie.title}
        <span style={ { cursor: 'pointer' } } onClick={toggleFavorite} onKeyPress={toggleFavorite} role="button">
          {movie.favorite ? '💖' : '🖤'}
        </span>
      </div>
      <div className="movie-rating">
        {`${movie.rating}/10`}
      </div>
      <div className="movie-sum">
        {`$${movie.sum}m`}
      </div>
    </>
  );
}

export default MovieCard;
