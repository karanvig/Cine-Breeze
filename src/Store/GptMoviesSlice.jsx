import { createSlice } from "@reduxjs/toolkit";

const gptmovieSlice = createSlice({
    name: "gpt",
    initialState: {
        gptMovies: null,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        addGptMovies: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
});

export const { addGptMovies } = gptmovieSlice.actions;
export default gptmovieSlice.reducer;
