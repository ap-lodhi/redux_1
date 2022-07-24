import {  ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, DELETE_TODO_ERROR, DELETE_TODO_LOADING, DELETE_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, PATCH_TODO_ERROR, PATCH_TODO_SUCCESS } from "./actionTypes"


export const addTodoLoading =()=>{
    return{
        type:ADD_TODO_LOADING,

    }
}

export const addTodoSuccess =(  payload)=>{
    return{
        type:ADD_TODO_SUCCESS,
        payload
    }
}
export const addTodoError =()=>{
    return{
        type:ADD_TODO_ERROR
    }
}


export const getTodoLoading =()=>{
    return{
        type:GET_TODO_LOADING,

    }
}

export const getTodoSuccess =(  payload)=>{
    return{
        type:GET_TODO_SUCCESS,
        payload
    }
}
export const getTodoError =()=>{
    return{
        type: GET_TODO_ERROR
    }
}

export const patchTodoLoading =()=>{
    return{
        type:PATCH_TODO_SUCCESS,

    }
}

export const patchTodoSuccess =( )=>{
    return{
        type:PATCH_TODO_SUCCESS,
        
    }
}
export const patchTodoError =()=>{
    return{
        type: PATCH_TODO_ERROR
    }
}

export const deleteTodoLoading =()=>{
    return{
        type:DELETE_TODO_LOADING,

    }
}

export const deleteTodoSuccess =( )=>{
    return{
        type:DELETE_TODO_SUCCESS,
       
    }
}
export const deleteTodoError =()=>{
    return{
        type: DELETE_TODO_ERROR
    }
}