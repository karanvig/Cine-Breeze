/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const placeholderImage = 'https://via.placeholder.com/500x750?text=No+Image'; // Placeholder URL

  return (
    <div className="movie-card flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border border-gray-300 rounded-lg bg-white shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2">
      <Link to={`/movie/${movie.id}`}>
        <img
          className="w-full h-auto rounded-md mb-2"
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : placeholderImage}
          alt={movie.title || 'Movie Poster'}
        />
      </Link>
      <h2 className="text-lg sm:text-xl font-semibold mb-2">
        <Link to={`/movie/${movie.id}`} className="text-inherit no-underline">
          {movie.title}
        </Link>
      </h2>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
