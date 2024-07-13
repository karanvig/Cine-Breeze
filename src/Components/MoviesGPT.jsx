/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import OpenAi from '../OpenAi';
import { useDispatch } from 'react-redux';
import { addGptMovies } from '../Store/GptMoviesSlice';
import MovieList from './MovieList';
import Shimmer from './ShimmerUI';

const MoviesGPT = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const searchMovieGPT = async (movie) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWNiZmY0ZTRiMGZhNTlhZDYxYmM3NWI0YjRiMDNmYyIsIm5iZiI6MTcyMDEwMDgzOC4zNjIwNTIsInN1YiI6IjY2ODI2NmFmZmM1MGMzYTUyODkyN2ZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oImfcNgHjI2NXIcKpilpl5eNjciL7gqn_sjhyFWk7HU'
      }
    };

    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`, options);
      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        console.warn(`No results found for movie: ${movie}`);
        return null;
      }


      return data.results[0]; // Returning the first result
    } catch (error) {
      console.error('Error fetching movie data:', error);
      return null;
    }
  };

  const handleSearch = async () => {
    const searchTermValue = searchText.current.value;
    setSearchTerm(searchTermValue);
    setLoading(true);
  

    const gptQuery = `Act as a movie recommendation system and suggest some movies for the query: ${searchTermValue}. Only give me names of 10 movies, comma separated like the example result given ahead. Example Result: Don, Sholay, Sonu Ke Titu Ki Sweety, Animal, Hera Pheri, De Dana Dan, Golmaal`;

    try {
      const chatCompletion = await OpenAi.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

      const gptMoviesString = chatCompletion.choices?.[0]?.message?.content;
    

      if (!gptMoviesString) {
        console.error('No movies returned from GPT.');
        setLoading(false);
        return;
      }

      const gptMovies = gptMoviesString.split(",").map(movie => movie.trim());

      const movieDataPromises = gptMovies.map(movie => searchMovieGPT(movie));
      const tmdbResults = await Promise.all(movieDataPromises);

      dispatch(addGptMovies({ movieNames: gptMovies, movieResults: tmdbResults }));
      setSearchResults(tmdbResults);
    } catch (error) {
      console.error('Error during the search process:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center my-40 bg-cover bg-center h-screen">
      <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-md flex items-center">
        <input
          ref={searchText}
          type="text"
          placeholder="Search movies..."
          className="p-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 flex-1 text-base leading-normal"

        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md focus:outline-none ml-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {loading ? (
        <Shimmer />
      ) : (
        <MovieList title={searchTerm} movies={searchResults} />
      )}
    </div>
  );
};

export default MoviesGPT;
