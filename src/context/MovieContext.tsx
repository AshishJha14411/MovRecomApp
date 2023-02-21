import { createContext, useState, useEffect, useContext } from "react";
import { MovieContext, MovieList, GenreContext } from './types';
import { GenresContext } from "./GenreContext";
import axios from "axios";

export const MoviesContext = createContext<MovieContext | null>(null);
export const MovieListProvider = (props:any) => {

    /*  Genre ID for Movie Fetching query  */
    const {genreId} = useContext(GenresContext) as GenreContext

    /*  States for Storing the Required Data   */
    const [movieList, setMovieList] = useState<MovieList[]>([])
    const [movieId, setMovieId] = useState<number>(0)

    /*  Movie Fetching call   */
    const fetchMovieFunc = async () => {

        /*  API_KEY   */
        const apiKey: string | undefined = process.env.REACT_APP_API_KEY
        
        /*  Movie Fetching and assigning to a var   */
        const resp = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`)
        const tempVar = resp.data.results

        /*  State assignment for future use globally   */
        setMovieList(tempVar)
    };
    useEffect(() => {
        if(genreId){
            fetchMovieFunc()
        }
        /*  Calling Function When genre is changed  */
    },[genreId])

    return(
        <MoviesContext.Provider
        value={{movieList,movieId,setMovieId}}
        >
            {props.children}
        </MoviesContext.Provider>
    )




}