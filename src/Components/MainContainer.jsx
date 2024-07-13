/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import Background from './Background';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  if (!movies) {
    return <div>Loading...</div>;
  }

  const background = movies[0];
  const { original_title, overview, id } = background;

  return (
    <div className="relative">
      <div className="relative">
        <Background movieId={id} />
      </div>
      <div className="absolute inset-x-0 bottom-0 md:bottom-8 lg:right-8 lg:left-auto flex justify-center items-center p-4">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
