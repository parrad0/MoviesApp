/* eslint-disable eqeqeq */
import { Component } from "react";
import React from "react";
import { RowComponentPropsDto } from "./RowComponentDto";
import GenreTagComponent from "../GenreTagComponent/GenreTagComponent";
import store from "../../redux/store/store";
import { modifyWatchedMovie, deleteMovie } from "../../redux/actions/actions";
import movieAppController from "../../controller/movieAppController";
import { showSpinner, hideSpinner } from "../Spinner/SpinnerComponent";

class RowComponent extends Component<RowComponentPropsDto,{}> {
    _movieAppController: movieAppController;
    constructor(props: any){
        super(props);
        this._movieAppController = new movieAppController();

    }
    render(){
        return (
            <div className="movieRow">
                <span className="nameRowWrap">{this.props.movie.name}</span>
                <span className="genreInputsWrap">{this.props.movie.genreInputs.map((genre : any,index: any)=>{return(<GenreTagComponent key={index} genre={genre}/>)})}</span>
                <span onClick={(e)=>this._watchedClicked(this.props.movie.name)} className="watchedRowWrap">                 
                    {this.props.movie.isWatched == true ? <i className="far fa-eye"></i> : <i className="far fa-eye-slash"></i>}
                </span>
                <span className="deleteRowWrap"  onClick={()=>this._onDeleteMovieClick_(this.props.movie.name)}><i className="fas fa-trash-alt"></i></span>
           </div>);
    }
    _watchedClicked(event : any){
      this._movieAppController.modifyWatchedProperty(event);
    }
    async _onDeleteMovieClick_(event : any){
        showSpinner();
        this._movieAppController.deleteMovie(event);
      await hideSpinner();
    }
}
export default RowComponent;