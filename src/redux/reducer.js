import { ADD_COUNT, DEC_COUNT } from "./actionTypes";

const initialState={
    count:0 
}
 export const reducer =(State =initialState, action)=>{
    switch(action.type){
        case ADD_COUNT:
            return{
                ...State,
                count:State.count+action.payload
            }

        case DEC_COUNT:
            return{
                ...State,
                count:State.count-action.payload
            }
            default:
                return{...State};
    }
}