import { Component } from "react";
import React from "react";
import { SpinnerDto } from "./SpinnerComponent-dto";
let showHideSpinner: (show : boolean) => void;
class SpinnerComponent extends Component <{},SpinnerDto>{

    constructor(props : any){
    super(props);  
    this.state={
        showComponentClass:"hidden"
    }
    }
    componentDidMount(){
        showHideSpinner= (show : boolean)=> this.showHideSpinerScreen(show);
    }
    render(){
        return(
        <div className={this.state.showComponentClass}>
                <img src="https://media2.giphy.com/media/VseXvvxwowwCc/giphy.gif?cid=ecf05e473495b3dae8209e71a31a6637c7788602535dae3b&rid=giphy.gif" alt="loading..." />
        </div>);
    }
    showHideSpinerScreen(show : boolean) {
if(show){
this.setState({showComponentClass:"spinner"});
}else{
this.setState({showComponentClass:"hidden"});
}
    }

}export default SpinnerComponent;

export function showSpinner (){
    showHideSpinner(true);
}
export async function hideSpinner (){
    return new Promise(resolve => {
        setTimeout(() => {
            showHideSpinner(false);
        }, 3000);
      });
    }
  
