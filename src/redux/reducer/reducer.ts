const initialState:any={}

function rootReducer(state = initialState, action : any){
  return {
      ...state 
  }

}
export default rootReducer;