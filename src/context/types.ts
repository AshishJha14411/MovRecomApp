import { Dispatch,  SetStateAction } from "react";

export type genreList = {
  id: number;
  name: string;
};

export interface GenreContext {
  genres: genreList[];
  genreId: number | null;
  setGenreId: Dispatch<SetStateAction<number>>;
}
export type MovieList = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export interface MovieContext {
  movieList: MovieList[];
  movieId: number | null;
  setMovieId: Dispatch<SetStateAction<number>>;
}
export type VideoList = {
    iso_639_1?: string,
    iso_3166_1?: string,
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    official: boolean,
    published_at: Date,
    id: string
}
export interface VideoContext {
    videoId: string,
    setVideoId: Dispatch<SetStateAction<string>>
}