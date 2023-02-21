import { createContext, useState, useEffect, useContext } from "react";
import { VideoContext, MovieContext } from './types';
import { MoviesContext } from '../context/MovieContext'
import axios from "axios";

export const VideosContext = createContext<VideoContext | null>(null);

export const VideoProvider = (props: any) => {

  /*  Movie ID for the Trailer Fetching   */
  const { movieId } = useContext(MoviesContext) as MovieContext

  /*  YT Video Key   */
  const [videoId, setVideoId] = useState<string>("")

  /*  Youtube Trailer List Fetching Function   */
  const fetchMovieVideoFunc = async () => {

    /*  API_KEY   */
    const apiKey: string | undefined = process.env.REACT_APP_API_KEY

    /*  API Fetching call and Storing data in resp   */
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
    );

    /*  Finding the Official Trailer to get the Official Trailer YT Link "Key"   */
    const tempVar = resp.data.results.find((item: { name: string; }) => item.name == "Official Trailer").key

    /*  State assignment for future use globally   */
    setVideoId(tempVar)
  };

  useEffect(() => {
    fetchMovieVideoFunc()

  /*  Re-running the Function with change in Movie ID   */
  }, [movieId])
  return (
    <VideosContext.Provider
      value={{ videoId, setVideoId }}
    >
      {props.children}
    </VideosContext.Provider>
  );
};