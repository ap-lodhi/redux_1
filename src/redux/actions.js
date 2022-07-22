import { ADD_COUNT, DEC_COUNT } from "./actionTypes"

 export const addCnt =()=>{
    return{
        type: ADD_COUNT
    }
}

export  const decCnt =()=>{
    return{
        type:DEC_COUNT
    }
}