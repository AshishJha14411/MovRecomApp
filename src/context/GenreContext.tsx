import { createContext, useState, useEffect } from 'react'
import { genreList, GenreContext } from './types'
import axios from 'axios'

export const GenresContext = createContext<GenreContext | null>(null)

export const GenreListProvider = (props: any) => {
    /*  States for Storing the Genre Data   */
    const [genres, setGenres] = useState<genreList[]>([])
    const [genreId, setGenreId] = useState<number>(0)


    const fetchGenreFunc = async () => {
        /* API_KEY */
        const apiKey: string | undefined = process.env.REACT_APP_API_KEY
        /*  Fetching Genre List   */
        const resp = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US"`)
        let tempVar = resp.data.genres

        /*  State assignment for future use globally   */
        setGenres(tempVar)
    }
    useEffect(() => {
        fetchGenreFunc()
    }, [])

    return (
        <GenresContext.Provider
            value={{ genres, genreId, setGenreId }}
        >
            {props.children}
        </GenresContext.Provider>
    )
}