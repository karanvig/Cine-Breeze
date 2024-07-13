import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './MovieSlice';
import gptMovieReducer from './GptMoviesSlice';  // Ensure the correct file path

const AppStore = configureStore({
  reducer: {
    movies: moviesReducer,
    gpt: gptMovieReducer,
  },
});

export default AppStore;
