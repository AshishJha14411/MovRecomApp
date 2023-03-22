import { createContext, useEffect, useState } from "react";
import { MovieSearchContext, MovieList } from './types';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export const MovieSearch = createContext<MovieSearchContext | null>(null)

export const MovieSearchProvider = (props: any) => {
    /* Setting up navigate for future use */
    const navigate = useNavigate()
    /* Setting search string query */
    const [query, setQuery] = useState<string>("")
    /* Initiating Search on click */
    const [search, setSearch] = useState(false)
    /* State for storing data we get from searching  */
    const [searchData, setSearchData] = useState<MovieList[] | []>([])
    /* fetching search data */
    const searchApifetch = async () => {
        const apiKey: string | undefined = process.env.REACT_APP_API_KEY
        const resp = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
        );
        const tempVar = resp.data.results
        setSearchData(tempVar)
    }
/* if search data is not present and search is false then search the data  */
    if (searchData.length===0 && search) {
        searchApifetch()
    }
    useEffect(() => {
        if(searchData.length!==0){
            navigate("/")
        }
    },[searchData])
    return (
        <MovieSearch.Provider
            value={{ query, setQuery, searchData,setSearchData, search, setSearch }}
        >
            {props.children}
        </MovieSearch.Provider>
    )
}