import { movie } from "../entities/movie";
import store from "../redux/store/store";
import { addMovie, addGenre, deleteGenreInputs, modifyWatchedMovie, deleteMovie } from "../redux/actions/actions";

class movieAppController {
public addMovie(movieToAdd : movie){
    if(this._checkMovieRepeated(movieToAdd)){
        (document.getElementById("movieInput") as HTMLInputElement).value="";
        store.dispatch(deleteGenreInputs());
    }else{
        store.dispatch(addMovie(movieToAdd));
        (document.getElementById("movieInput") as HTMLInputElement).value="";
    }
}
public addGenre(genreInput : string){
    if(this.checkIfGenreRepeated(genreInput)){
        (document.getElementById("genreInput") as HTMLInputElement).value="";
    }else{
        store.dispatch(addGenre(genreInput));
        (document.getElementById("genreInput") as HTMLInputElement).value="";
    }
}
public modifyWatchedProperty(event : any){
    store.dispatch(modifyWatchedMovie(event));
}
public deleteMovie(event : any){
    store.dispatch(deleteMovie(event));
}
private checkIfGenreRepeated(genreInput : string){
    let repeated = false;

    store.getState().genreInputsAdded?.forEach((genre: string) => {
    if (genreInput.toLowerCase().localeCompare(genre.toLowerCase()) == 0) {
        repeated = true;
    }
    });
    if(genreInput == undefined || genreInput == ""){
        repeated = true;
    }
        return repeated;
}
private  _checkMovieRepeated(movie : movie) : boolean{
    let repeated = false;
    store.getState().movieData?.forEach((movieStore: movie) => {
    if (movieStore.name.toLowerCase().localeCompare(movie.name.toLowerCase()) == 0) {
        repeated= true;
    }
    });
    if(movie.name == undefined ||  movie.name == ""){
        repeated = true;
    }
        return repeated;
}
}export default movieAppController;