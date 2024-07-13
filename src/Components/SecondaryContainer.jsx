/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);

    // Destructuring movies from store with default empty arrays
    const nowPlayingMovies = movies?.nowPlayingMovies || [];
    const popularMovies = movies?.popularMovies || [];
    const topRatedMovies = movies?.TopRatedMovies || [];
    const upcomingMovies = movies?.UpcomingMovies || [];

    if (!movies) {
        return <div className="text-center mt-8">Loading...</div>; // Centered loading message
    }

    return (
        <div className="container mx-auto px-4 mt-8">
            <MovieList title="Upcoming" movies={upcomingMovies} />
            <MovieList title="Now Playing" movies={nowPlayingMovies} />
            <MovieList title="Top Rated" movies={topRatedMovies} />
            <MovieList title="Popular" movies={popularMovies} />
        </div>
    );
};

export default SecondaryContainer;
