import { createContext, useState, useEffect, useContext } from "react";
import { VideoContext, MovieContext, VideoList } from './types';
import { MoviesContext } from '../context/MovieContext'
import axios from "axios";

export const VideosContext = createContext<VideoContext | null>(null);

export const VideoProvider = (props: any) => {

  const { movieId } = useContext(MoviesContext) as MovieContext
  const [videoId, setVideoId] = useState<string>("")

  const fetchMovieFunc = async () => {

    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=85e09ce3f5cb7e9850a5011d3898d516&language=en-US`
    );
    const tempVar = resp.data.results.find((item: { name: string; }) => item.name == "Official Trailer").key
    setVideoId(tempVar)
  };
  useEffect(() => {
    fetchMovieFunc()
  }, [movieId])
  return (
    <VideosContext.Provider
      value={{ videoId, setVideoId }}
    >
      {props.children}
    </VideosContext.Provider>
  );
};