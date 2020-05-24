import { movie } from "../../entities/movie";

export interface MovieListDto{
    movieData: movie[],
    sortedList? : movie[],
    searchByNameInput? : string
}