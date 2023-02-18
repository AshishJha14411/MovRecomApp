import { createContext, useState, useEffect, useContext } from "react";
import { MovieContext, MovieList, GenreContext } from './types';
import { GenresContext } from "./GenreContext";
import axios from "axios";

export const MoviesContext = createContext<MovieContext | null>(null);
export const MovieListProvider = (props:any) => {
    const {genreId} = useContext(GenresContext) as GenreContext
    const [movieList, setMovieList] = useState<MovieList[]>([])
    const [movieId, setMovieId] = useState<number>(0)
    const apiKey: string | undefined = process.env.REACT_APP_API_KEY
    const fetchMovieFunc = async () => {
        const resp = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`)
        const tempVar = resp.data.results
        setMovieList(tempVar)
    };
    useEffect(() => {
        if(genreId){
            fetchMovieFunc()
        }
    },[genreId])

    return(
        <MoviesContext.Provider
        value={{movieList,movieId,setMovieId}}
        >
            {props.children}
        </MoviesContext.Provider>
    )




}