import { Component } from "react";
import RouteViewsPath from "../../components/route-views-path/route-views-path";
import React from "react";

export default class AppView extends Component {
    render(){
        return (
            <React.Fragment>
                <RouteViewsPath />
            </React.Fragment>);
    }
}