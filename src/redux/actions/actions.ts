import { ADD_GENRE, DELETE_GENRE, ADD_MOVIE, MODIFY_WATCHED_MOVIE, DELETE_GENRE_INPUTS, DELETE_MOVIE, DELETE_GENRE_FROM_MOVIE } from "./constants/constants";
import { movie } from "../../entities/movie";

export function addGenre(payload : string){
    return {type:ADD_GENRE, genre: payload};
}
export function deleteGenre(payload : string){
    return {type: DELETE_GENRE  , genre: payload};
}
export function addMovie(payload : movie){
    return {type: ADD_MOVIE  , movie: payload};
}
export function modifyWatchedMovie(payload : movie){
    return{type: MODIFY_WATCHED_MOVIE, name : payload}
}
export function deleteGenreInputs(){
    return{type: DELETE_GENRE_INPUTS}
}
export function deleteMovie(payload : string){
    return{type: DELETE_MOVIE, name: payload}
}
export function deleteGenreFromMovie(payload : string){
    return{type: DELETE_GENRE_FROM_MOVIE, name: payload}
}
