import React, { Component } from "react";
import MoviesApp from "../../view/MoviesApp";
import {
    BrowserRouter ,
    Route,
    Redirect
  } from "react-router-dom";
class RouteViewsPath extends Component{
render(){
    return(
        <React.Fragment>
            <BrowserRouter>
            <Route exact path="/" component={MoviesApp}></Route>
             <Route exact path="/:gender" component={MoviesApp}/>
            <Redirect exact path="/" to={"/"}></Redirect>
            </BrowserRouter>
        </React.Fragment>
        )
    }
}
export default RouteViewsPath;