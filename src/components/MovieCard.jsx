import React from 'react';
import './MovieCard.css'; // Import external CSS

const MovieCard = ({ movie }) => {
  const { title, image, watchLink } = movie;

  return (
    <div className="movie-card">
      <img src={image} alt={title} className="movie-image" />
      <h3>{title}</h3>
      <a href={watchLink} target="_blank" rel="noopener noreferrer">
        <button className="watch-button">
          Watch Now
        </button>
      </a>
    </div>
  );
};

export default MovieCard;
