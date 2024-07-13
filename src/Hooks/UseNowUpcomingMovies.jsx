/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../Store/MovieSlice';

const UseNowUpcomingMovies = () => {

    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWNiZmY0ZTRiMGZhNTlhZDYxYmM3NWI0YjRiMDNmYyIsIm5iZiI6MTcxOTk0NDYzOC41NDc0NDEsInN1YiI6IjY2ODI2NmFmZmM1MGMzYTUyODkyN2ZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nkyRQV14xVwUyHeishYT24sxUAzx6APPhyoijXY-JEk'
            }
        };


        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        const response = await data.json();
        dispatch(addUpcomingMovies(response.results));
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []);

}

export default UseNowUpcomingMovies