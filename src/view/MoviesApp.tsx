import React, { Component } from 'react';
import AddMovieComponent from '../components/AddMovieComponent/AddMovieComponent';
import MovieList from '../components/MovieList/MovieList';
import { RouteComponentProps } from 'react-router-dom';
import { MoviesAppDto } from './MoviesApp-dto';
import queryString from 'query-string';

class MoviesApp extends Component<RouteComponentProps<MoviesAppDto>,{genderFilterBy : string}>{

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props :any){
    super(props);
    this.state={
      genderFilterBy:  this.props.match.params.gender
    }
   
  }
  componentDidMount(){

    console.log(this.state.genderFilterBy);
  }
  render(){
    return(
    <div>
      <AddMovieComponent />
      <MovieList filterTag={this.props.match.params.gender}/>
    </div>);
  }
}

export default MoviesApp;
