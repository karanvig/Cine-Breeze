/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Store/MovieSlice';

const UseNowPlayingMovies = () => {
    const dispatch=useDispatch()

    const getNowPlayingMovies=async()=>{
  
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWNiZmY0ZTRiMGZhNTlhZDYxYmM3NWI0YjRiMDNmYyIsIm5iZiI6MTcxOTgzMTIxNi43NDg5NzIsInN1YiI6IjY2ODI2NmFmZmM1MGMzYTUyODkyN2ZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w16yEinT3yPkhPlT_7vehp2gbShqzmUkzYCebhdFB7o'
        }
      };
      
      const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        const response=await data.json()
        dispatch(addNowPlayingMovies(response.results))
    }
  
    useEffect(()=>{
      getNowPlayingMovies();
  
    },[])
}

export default UseNowPlayingMovies