import React, { createContext, useState, useEffect, useContext } from "react";
import { MovieContext, MovieList,GenreContext } from './types';
import {GenresContext} from '../context/GenreContext'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const MoviesContext = createContext<MovieContext | null>(null);

export const MovieListProvider= (props:any) => {

  /* Importing genre Id for use in the api */
  const {genreId} = useContext(GenresContext) as GenreContext
  /* State for storing movie list we get from genre id */
  const [movieList, setMovieList] = useState<MovieList[]>([])
  /* Movie id store that is to be used to search for video and movie data */
  const [movieId, setMovieId] = useState<number>(0)
  /* State for storing movie list of trending */
  const [trending, setTrending] = useState<MovieList[]>([])
  /* State for storing trending page status, based on which trending page will be displayed or not */
  const [showTrend, setShowTrend] = useState<boolean>(false)
  /* State for storing movie list of Now playing in theater */
  const [nowPlaying, setNowPlaying] = useState<MovieList[]>([])
  /* State which holds the data of the single movie */
  const [singleMovie, setSingleMovie] = useState<MovieList[]>([])
  /* State for storing now playing page status, based on which now playing page will be displayed or not */
  const [showPlaying, setShowPlaying] = useState<boolean>(true)
  /* Storing api key in a variable */
  const apiKey: string | undefined = process.env.REACT_APP_API_KEY
  const fetchMovieFunc = async () => {
    /* fetching Movie list based on genre */
    const resp = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`
    );
    setMovieList(resp.data.results)
  };
  /* fetching trending movies list */
  const fetchTrendingMovie = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
    )
    const tempVar = resp.data.results
    setTrending(tempVar)
  }
  /* fetching now playing */
  const fetchNowPlaying = async() => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    )
      const tempVar = resp.data.results
      setNowPlaying(tempVar)
  }
  /* setting up navigate hook for using to redirect */
  const navigate = useNavigate()
   
    
/* calling fetch now playing when show playing is set to true */
if(showPlaying){
  fetchNowPlaying()
  setShowPlaying(false)
}
/* calling fetch now trending when show playing is set to true */
  if(showTrend){
    fetchTrendingMovie()
    setShowTrend(false)
  }
  /* navigate to single movie when singleMovie state is changed and fetching movie based on genre when genreId is changed */
  useEffect(() => {
    if(genreId){
      fetchMovieFunc()
    }
    if(singleMovie.length!==0){
      navigate('/singleMovie')
  }

   
  },[genreId, singleMovie])
  return (
    <MoviesContext.Provider 
    value={{movieList, movieId,nowPlaying,setSingleMovie,singleMovie, setShowPlaying, setNowPlaying, setMovieId, trending, setShowTrend, showTrend}}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};