/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/Components/Browse.jsx
import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import ShimmerUI from './ShimmerUI'
import UseNowPlayingMovies from '../Hooks/UseNowPlayingMovies';
import UsePopulrMovies from '../Hooks/UsePopulrMovies';
import UseTopRatedMovies from '../Hooks/UseTopRatedMovies';
import logoutIcon from '../assets/logout.svg';
import gpt from '../assets/gpt.svg';
import UseNowUpcomingMovies from '../Hooks/UseNowUpcomingMovies';

const MainContainer = lazy(() => import('./MainContainer'));
const SecondaryContainer = lazy(() => import('./SecondaryContainer'));

const Browse = ({ onSignOut }) => {
  UseNowPlayingMovies();
  UsePopulrMovies();
  UseTopRatedMovies();
  UseNowUpcomingMovies();

  return (
    <>
      <div className="fixed flex gap-3 top-12 right-4 z-50 bg-transparent group">
        <Link to="/gpt">
          <img
            src={gpt}
            alt="GPT"
            className="cursor-pointer w-8 h-8"
            style={{ filter: 'invert(50%)' }}
          />
        </Link>

        <img
          src={logoutIcon}
          alt="Sign Out"
          className="cursor-pointer w-8 h-8"
          onClick={onSignOut}
          style={{ filter: 'invert(50%)' }}
        />
      </div>
      <Suspense fallback={<div>Loading Main Container...</div>}>
        <MainContainer />
      </Suspense>
      <div className="mt-14">
        <Suspense fallback={<div>Loading Secondary Container...</div>}>
          <SecondaryContainer />
        </Suspense>
      </div>
    </>
  );
};

export default Browse;
