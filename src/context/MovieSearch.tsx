import { createContext, useEffect, useState } from "react";
import { MovieSearchContext, MovieList } from './types';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export const MovieSearch = createContext<MovieSearchContext | null>(null)

export const MovieSearchProvider = (props: any) => {
    const navigate = useNavigate()
    const [query, setQuery] = useState<string>("")
    const [search, setSearch] = useState(false)
    const [searchData, setSearchData] = useState<MovieList[] | []>([])
    //const [searched, setSearched] = useState<
    const searchApifetch = async () => {
        const resp = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=85e09ce3f5cb7e9850a5011d3898d516&language=en-US&query=${query}&page=1&include_adult=false`
        );
        const tempVar = resp.data.results
        setSearchData(tempVar)
            console.log(tempVar)
            
    }

    if (searchData.length===0 && search) {
        searchApifetch()
        console.log(searchData)
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