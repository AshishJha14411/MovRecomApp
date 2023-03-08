
import './App.css';
import axios from 'axios';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GenreCard from './components/GenreCard';
import React, { useContext, useEffect } from 'react'

import Home from './components/Home';
import { VideoProvider } from './context/VideoContext';

import { GenreContext, MovieContext, VideoContext } from './context/types';
import { VideosContext } from './context/VideoContext'
import MovieCard from './components/MovieCard';
import { MovieSearchProvider } from './context/MovieSearch';
import Navbar from './components/Navbar';
import { GenresContext } from './context/GenreContext';
import TrendingPage from './components/TrendingPage';
import MoviePage from './components/MoviePage';
import { MoviesContext } from './context/MovieContext';

import { useNavigate } from 'react-router-dom'
function App() {
  
  const {movieList,singleMovie, setSingleMovie,movieId, setMovieId} = useContext(MoviesContext) as MovieContext
  const {genreId, setGenreId} = useContext(GenresContext) as GenreContext
 
  return (
    <div className=''>
    <VideoProvider>
      <MovieSearchProvider>
      
        <Navbar />
          <Routes>
              <Route path="/" element= {<Home />} />
              <Route path="genrecard" element={genreId ? <MovieCard /> : <GenreCard />} />
              <Route path="moviecard" element={<MovieCard />} />
              <Route path="trending" element={<TrendingPage />} />
              <Route path="singleMovie" element={<MoviePage />} />
          </Routes>
       
      </MovieSearchProvider>
    </VideoProvider>
    </div>
  );
}

export default App;
