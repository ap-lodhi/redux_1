import { ADD_COUNT, ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, DEC_COUNT, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS } from "./actionTypes";

const initialState={
    count:0 ,
    todos:{
        loading: false ,
        error:false,
        data:[]
    }
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
        case ADD_TODO_LOADING:
            return{
                ...State,
                todos:{
                    ...State.todos,
                    lodaidng:true,
                }
            }
        case ADD_TODO_SUCCESS:
            return{
                ...State,
                todos:{
                      ...State.todos,
                    lodaidng:false,
                    error:false
                }
             }
        case ADD_TODO_ERROR:
            return{
                ...State,
                todos:{
                      ...State.todos,
                    lodaidng:false,
                    error:true,
                }
            }
            case GET_TODO_LOADING:
                return{
                    ...State,
                    todos:{
                          ...State.todos,
                        lodaidng:true,
                    }
    
                }
            case GET_TODO_SUCCESS:
                return{
                    ...State,
                    todos:{
                          ...State.todos,
                        lodaidng:false,
                        error:false,
                        data:action.payload
                    }
                    
                 }
            case GET_TODO_ERROR:
                return{
                    ...State,
                    todos:{
                          ...State.todos,
                        lodaidng:false,
                        error:true,
                    }
                }    
        
            default:
                return{...State};
    }
}