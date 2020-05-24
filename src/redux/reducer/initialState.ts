import { movie } from "../../entities/movie";

export interface InitialState{
    genreInputsAdded? : string[]
    movieData? : movie[]
}