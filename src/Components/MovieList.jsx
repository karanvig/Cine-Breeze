/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    const containerRef = useRef(null);

    const scrollLeft = () => {
        containerRef.current.scrollTo({ left: containerRef.current.scrollLeft - 200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        containerRef.current.scrollTo({ left: containerRef.current.scrollLeft + 200, behavior: 'smooth' });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <div className="relative overflow-hidden">
                <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-700 text-white rounded-full shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <div ref={containerRef} className="flex space-x-4 overflow-x-hidden">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
                <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-700 text-white rounded-full shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default MovieList
