import React, { useEffect, useState, Fragment } from 'react';
import MovieCard from './MovieCard';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      })
      .catch(err => {
        console.error('Failed to fetch movies:', err);
      });
  }, []);

  return (
    <Fragment>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={{
              id: movie.id,
              title: movie.title,
              image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
              watchLink: `https://www.themoviedb.org/movie/${movie.id}`
            }}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default MovieList;
