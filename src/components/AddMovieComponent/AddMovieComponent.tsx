/* eslint-disable eqeqeq */
import { Component } from "react";
import React from "react";
import { AddNMovieComponentDto } from "./AddMovieComponent-dto";
import store from "../../redux/store/store";
import GenreTagComponent from "../GenreTagComponent/GenreTagComponent";
import { addGenre, addMovie, deleteGenre } from "../../redux/actions/actions";
import { movie } from "../../entities/movie";
import movieAppController from "../../controller/movieAppController";
import { stringify } from "querystring";
import { showSpinner, hideSpinner } from "../Spinner/SpinnerComponent";

class AddMovieComponent extends Component<{},AddNMovieComponentDto>{
movieAppController : movieAppController;
    constructor(props : any){
        super(props);
        this.state={
        genreInputsAdded:[]
    }
    this.movieAppController = new movieAppController();

}
componentDidMount(){

    store.subscribe(()=>{
        if(store.getState().genreInputsAdded.length !== this.state.genreInputsAdded.length){
             this.setState({genreInputsAdded:store.getState().genreInputsAdded});
        }
      });
}
    render(){
        return(
        <div className="addMovieComponent">
            <div className="inputsColumn">
                <div className="inputBox">
                    <div><p>Movie</p></div>
                    <input id="movieInput"   type="text" onChange={(e)=> this._changeInput(e)}></input>
        <div className="genreDisplayBox">{
            this.state.genreInputsAdded.map((value:any,index :any) => {
              return  <GenreTagComponent genre={value} key={index} onClick={(event:any)=>this._deleteClick(event)} />
        })
        }</div>
                </div>

                <div className="inputBox">
                    <div><p>Genre</p></div>
                    <input id="genreInput"   type="text" onChange={(e)=> this._changeInput(e)} ></input>
                    <div className="addGenreButton" onClick={()=>this._addGenreClick()}>Add Genre</div>
                </div>
            </div>
            <div className="submitButton" onClick={()=>this._addMovieClick()}>Add</div>
        </div>
        );
    }
    _changeInput(event:any){
        if(event.target.id == "movieInput"){
        this.setState({movieInput:event.target.value});
        }else{
            this.setState({genreInput:event.target.value});
        }
    }

    async _addMovieClick(){
        showSpinner();
        let movieToAdd : movie = {
            name: this.state.movieInput,
            genreInputs : this.state.genreInputsAdded,
            isWatched : false
        }
        this.movieAppController.addMovie(movieToAdd);
        this.setState({movieInput: ""});
        await hideSpinner();

    }
    _addGenreClick(){
      this.movieAppController.addGenre(this.state.genreInput);
      this.setState({genreInput: ""});
    }
    _deleteClick(event : any){
        store.dispatch(deleteGenre(event.target.getAttribute("data-genre")));
        
    }

}
export default AddMovieComponent;