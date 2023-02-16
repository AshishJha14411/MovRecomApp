
import { Dispatch, SetStateAction } from "react";

export type genreList = {
  id: number;
  name: string;
};

export interface GenreContext {
  genres: genreList[];
  genreId: number | null;
  setGenreId: Dispatch<SetStateAction<number>>;
}