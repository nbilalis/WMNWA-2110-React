import React from 'react';

import { useMovieData } from '../MovieDataProvider';

function MovieCard({ movie, width, seed }) {
  const { setFavorite } = useMovieData();

  const toggleFavorite = () => {
    setFavorite({ id: movie.id, favorite: !movie.favorite });
  };

  return (
    <>
      <img
        src={`https://picsum.photos/${width}/${width * 1.5}?random=${seed}`}
        width={width}
        height={width * 1.5}
        alt={movie.title}
      />
      <div className="movie-title" style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
        {movie.title}
        <button
          type="button"
          style={{ cursor: 'pointer', margin: '0 .25em' }}
          onClick={toggleFavorite}
          onKeyPress={toggleFavorite}
        >
          {(movie.favorite && '💖') || '🖤'}
        </button>
      </div>
      <div className="movie-rating">{`${movie.rating}/10`}</div>
      <div className="movie-sum">{`$${movie.sum}m`}</div>
    </>
  );
}

export default MovieCard;
