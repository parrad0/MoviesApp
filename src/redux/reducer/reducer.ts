/* eslint-disable eqeqeq */
import { ADD_GENRE, DELETE_GENRE, ADD_MOVIE, MODIFY_WATCHED_MOVIE, DELETE_GENRE_INPUTS, DELETE_MOVIE, DELETE_GENRE_FROM_MOVIE } from "../actions/constants/constants";
import { InitialState } from "./initialState";


const initialState : InitialState={
  genreInputsAdded:[],
  movieData : []
}

function rootReducer(state = initialState, action : any) : any{
  if(action.type == ADD_GENRE){
    return {
      ...state,
      genreInputsAdded: [...state.genreInputsAdded, action.genre]
  }
  }
  if(action.type ==  DELETE_GENRE){
    return {
      ...state,
      genreInputsAdded: [...state.genreInputsAdded.filter((value)=>{return value!= action.genre})]
  }
  }
  if(action.type ==  ADD_MOVIE){
    return {
      ...state,
      movieData: [action.movie,...state.movieData],
      genreInputsAdded:[]
  }
  } 
  if(action.type ==  MODIFY_WATCHED_MOVIE){
    let movieDataToReturn =Object.assign([],state.movieData);
    let indexOfMovieModified = undefined;
    let movieModified= state.movieData.find((movieModifiedIterated : any, index : any)=>{
      if(movieModifiedIterated.name == action.name){
        indexOfMovieModified = index;
      return movieModifiedIterated;
      }
      });

      if(movieModified.isWatched == true){
        movieModified.isWatched=false;
        movieDataToReturn.splice(indexOfMovieModified,1);
        movieDataToReturn.splice(movieModified.position,0,movieModified);

      }else{
        movieModified.isWatched=true;
        movieModified.position = indexOfMovieModified;
        movieDataToReturn.splice(movieDataToReturn.length,0,movieModified);
        movieDataToReturn.splice(movieModified.position,1);
      }
      indexOfMovieModified = undefined;
    return {
      ...state,
      movieData:movieDataToReturn
  }
  }
  if(action.type ==  DELETE_GENRE_INPUTS){
    return {
      ...state,
      genreInputsAdded:[]
  }
  } 
  if(action.type ==  DELETE_MOVIE){
    return {
      ...state,
      movieData :[...state.movieData.filter((value)=>{return value.name!= action.name})]
  }
  } 
  if(action.type == DELETE_GENRE_FROM_MOVIE){
    return {
      ...state,
      movieData :[...state.movieData.filter((value)=>value.name == action.movieName && value.genreInputs.find(genre=>genre != action.name))]
  }
  } 
  
return state;

}
export default rootReducer;