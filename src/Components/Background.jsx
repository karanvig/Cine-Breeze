/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

const Background = ({ movieId }) => {
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        const getMovieBackground = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWNiZmY0ZTRiMGZhNTlhZDYxYmM3NWI0YjRiMDNmYyIsIm5iZiI6MTcxOTgzMTIxNi43NDg5NzIsInN1YiI6IjY2ODI2NmFmZmM1MGMzYTUyODkyN2ZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w16yEinT3yPkhPlT_7vehp2gbShqzmUkzYCebhdFB7o',
                },
            };

            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
                const data = await response.json();

                const trailer = data.results.find(video => video.type === 'Trailer');
                if (trailer) {
                    const youtubeUrl = `https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=0&mute=1&loop=1&playlist=${trailer.key}&modestbranding=1&showinfo=0`;
                    setTrailerUrl(youtubeUrl);
                } else {
                    console.warn(`No trailer found for movie with ID ${movieId}`);
                }
            } catch (error) {
                console.error('Error fetching movie background:', error);
            }
        };

        getMovieBackground();
    }, [movieId]);

    return (
        <div className="relative w-full h-screen flex items-center justify-center">
            {trailerUrl ? (
                <iframe
                    className="absolute top-32 w-3/4 aspect-video"
                    src={trailerUrl}
                    title="Movie Trailer"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            ) : (
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl">Loading...</p>
            )}
        </div>
    );
};

export default Background;
