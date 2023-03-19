import React, { createContext, useState, useEffect, useContext } from "react";
import { MovieContext, MovieList,GenreContext } from './types';
import {GenresContext} from '../context/GenreContext'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const MoviesContext = createContext<MovieContext | null>(null);

export const MovieListProvider= (props:any) => {

  const {genreId} = useContext(GenresContext) as GenreContext
  const [movieList, setMovieList] = useState<MovieList[]>([])
  const [movieId, setMovieId] = useState<number>(0)
  const [trending, setTrending] = useState<MovieList[]>([])
  const [showTrend, setShowTrend] = useState<boolean>(false)
  const [nowPlaying, setNowPlaying] = useState<MovieList[]>([])
  const [singleMovie, setSingleMovie] = useState<MovieList[]>([])
  const [showPlaying, setShowPlaying] = useState<boolean>(true)
  const apiKey: string | undefined = process.env.REACT_APP_API_KEY
  const fetchMovieFunc = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`
    );
    setMovieList(resp.data.results)
  };
  const fetchTrendingMovie = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
    )
    const tempVar = resp.data.results
    setTrending(tempVar)
    console.log(tempVar)
  }
  const fetchNowPlaying = async() => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    )
      const tempVar = resp.data.results
      console.log(tempVar)
      setNowPlaying(tempVar)
  }
  const navigate = useNavigate()
   
    

  if(showPlaying){
    fetchNowPlaying()
    setShowPlaying(false)
  }
  if(showTrend){
    fetchTrendingMovie()
    setShowTrend(false)
  }
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