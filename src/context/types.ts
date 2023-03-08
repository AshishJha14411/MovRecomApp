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
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export interface MovieContext {
  movieList: MovieList[];
  movieId: number | null;
  showTrend: boolean;
  nowPlaying: MovieList[]
  setNowPlaying: Dispatch<SetStateAction<MovieList[]>>
  setShowPlaying: Dispatch<SetStateAction<boolean>>
  setShowTrend: Dispatch<SetStateAction<boolean>>
  trending: MovieList[];
  singleMovie: MovieList[];
  setSingleMovie:Dispatch<SetStateAction<MovieList[]>>;

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
   /*  OpenTrailer: () => void */
}

export interface MovieSearchContext {
  query: string | "",
  searchData: MovieList[]
  search: boolean
  setSearch: Dispatch<SetStateAction<boolean>>
  setQuery: Dispatch<SetStateAction<string>>
  
  setSearchData:Dispatch<SetStateAction<MovieList[]>>;
}