/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Browse from './Components/Browse';
import Login from './Components/Login';
import Header from './Components/Header';
import MoviesGPT from './Components/MoviesGPT';
import MovieDetail from './Components/MovieDetail';
import AppStore from './Store/AppStore';
import { Provider } from 'react-redux';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    // Simulate sign-in logic
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    // Reset authentication state
    setIsAuthenticated(false);
  };

  return (
    <Provider store={AppStore}>
      <BrowserRouter>
        <div className="relative h-screen w-full">
          <div className="absolute top-0 -z-10 h-full w-full bg-white">
            <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
          </div>

          <Header isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />

          <Routes>
            <Route path="/" element={<Login onSignIn={handleSignIn} />} />
            <Route
              path="/browse"
              element={<ProtectedRoute element={Browse} isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />}
            />
            <Route
              path="/gpt"
              element={<ProtectedRoute element={MoviesGPT} isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/movie/:id"
              element={<ProtectedRoute element={MovieDetail} isAuthenticated={isAuthenticated} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
