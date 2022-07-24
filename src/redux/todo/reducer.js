import {  ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS,  DELETE_TODO_ERROR, DELETE_TODO_LOADING, DELETE_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, PATCH_TODO_ERROR, PATCH_TODO_LOADING, PATCH_TODO_SUCCESS } from "./actionTypes";

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
                case PATCH_TODO_LOADING:
                    return{
                        ...State,
                        todos:{
                              ...State.todos,
                            lodaidng:true,
                        }
        
                    }
                case PATCH_TODO_SUCCESS:
                    return{
                        ...State,
                        todos:{
                              ...State.todos,
                            lodaidng:false,
                            error:false,
                           // data:action.payload
                        }
                        
                     }
                case PATCH_TODO_ERROR:
                    return{
                        ...State,
                        todos:{
                              ...State.todos,
                            lodaidng:false,
                            error:true,
                        }
                    }  
                    case DELETE_TODO_LOADING:
                        return{
                            ...State,
                            todos:{
                                  ...State.todos,
                                lodaidng:true,
                            }
            
                        }
                    case DELETE_TODO_SUCCESS:
                        return{
                            ...State,
                            todos:{
                                  ...State.todos,
                                lodaidng:false,
                                error:false,
                                //data:action.payload
                            }
                            
                         }
                    case DELETE_TODO_ERROR:
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












