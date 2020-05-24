import React, { Component } from "react";
import store from "../../redux/store/store";
import { deleteGenre } from "../../redux/actions/actions";

/* eslint-disable @typescript-eslint/no-useless-constructor */
class GenreTagComponent extends Component<{genre : string,onClick?:any},{}> {
    constructor (props :any ){
        super(props);
    }
    render(){
        return(
        <div  className="genreTag">{this.props.genre} <span data-genre={this.props.genre} className="deleteTag" onClick={(event)=>this.props.onClick ? this.props.onClick(event) : console.log("No Callback")}>X</span></div>
        );
    }
    _deleteClick(event : any){
        console.log(event.target.getAttribute("data-genre"));
        store.dispatch(deleteGenre(event.target.getAttribute("data-genre")));
        
    }
}
export default GenreTagComponent;