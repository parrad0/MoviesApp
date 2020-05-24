/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Component } from "react";
import React from "react";
import store from "../../redux/store/store";
import { movie } from "../../entities/movie";
import { MovieListDto } from "./MovieList-dto";
import RowComponent from "../RowComponent/RowComponent";
import movieAppController from "../../controller/movieAppController";
import SpinnerComponent, { showSpinner, hideSpinner } from "../Spinner/SpinnerComponent";
import { isUndefined } from "util";

class MovieList extends Component<{filterTag : string},MovieListDto>{
    _movieAppController : movieAppController;
    constructor(props : any){
        super(props);
        this.state={
            movieData:store.getState().movieData,
            sortedList : store.getState().movieData,
            searchByNameInput : ""
        }
        this._movieAppController = new movieAppController();
}
componentDidMount(){
    if(this.props.filterTag!=null){
        console.log(this.props.filterTag);
        //TODO logic to show movies, app is stateless
    }
    store.subscribe(()=>{
      if(store.getState().genreInputsAdded.length == 0){
             this.setState({movieData: store.getState().movieData});
             this._resetMoviesFilter();
      }
      });
}
render(){
    return(
    <div className="movieListComponent"> 
        <SpinnerComponent />

    <div className="filterListComponent">
        <div className="filterComponent">
            <div id="horrorFilmInput" data-filter-tag="horror" onClick={(event)=>this._clickInput(event)} className="radioButton"></div>
            <p className="textInputFilter">Horror</p>
        </div>
        <div className="filterComponent">
            <div id="comedyFilmInput" data-filter-tag="comedy"  onClick={(event)=>this._clickInput(event)} className="radioButton"></div>
            <p className="textInputFilter">Comedy</p>
        </div>
        <div className="filterComponent">
            <div id="romanceFilmInput" data-filter-tag="romance"  onClick={(event)=>this._clickInput(event)} className="radioButton"></div>
            <p className="textInputFilter">Romance</p>
        </div>
        <div onClick={()=>this._resetMoviesFilter()} className="filterComponent">
        <i className="fas fa-redo"></i>
            <p className="textInputFilter">Reset</p>
        </div>
    </div>
    <div className="searchByName">
        <input onChange={(event)=>this._updateSearchInput(event)} type="text"></input>
        <div onClick={()=>this._searchByName()}  className="searchButton"><p>Search</p></div>
    </div>
{this.state.sortedList?.map((value : movie,index:any)=>(
 
    <RowComponent movie={value}  key={index} />

))}
    </div>
    );
}

_clickInput(event : any){
    if(document.getElementById(event.target.id).classList.contains("clicked")){

        document.getElementById("horrorFilmInput").classList.remove("clicked");
        document.getElementById("romanceFilmInput").classList.remove("clicked");
        document.getElementById("comedyFilmInput").classList.remove("clicked");
        this._resetMoviesFilter();

    }else{
        document.getElementById("horrorFilmInput").classList.remove("clicked");
        document.getElementById("romanceFilmInput").classList.remove("clicked");
        document.getElementById("comedyFilmInput").classList.remove("clicked");
        document.getElementById(event.target.id).classList.add("clicked");

        this.setState({sortedList: this.state.movieData.filter(movie =>movie.genreInputs.filter(genre => genre == event.target.getAttribute("data-filter-tag")).length>=1 )});
       

    }
}

_resetMoviesFilter(){
    document.getElementById("horrorFilmInput").classList.remove("clicked");
    document.getElementById("romanceFilmInput").classList.remove("clicked");
    document.getElementById("comedyFilmInput").classList.remove("clicked");
    this.setState({sortedList: store.getState().movieData});
}
     async _searchByName(){
        showSpinner();
         this.setState({sortedList:this.state.movieData.filter((movie: movie)=> movie.name == this.state.searchByNameInput)});
         await hideSpinner();
}
 _updateSearchInput(event :any){
   
this.setState({searchByNameInput: event.target.value});
}
 
    
}
export default MovieList;