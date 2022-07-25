import {  ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, DELETE_TODO_ERROR, DELETE_TODO_LOADING, DELETE_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, PATCH_TODO_ERROR, PATCH_TODO_SUCCESS } from "./actionTypes"

import axios from "axios"
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


export const getTodos =()=> (dispatch)=>{
    dispatch(getTodoLoading()); 
    axios({
        method:"get",
        url:"http://localhost:8000/todos"
    }).then(res=>{
        console.log(res, "res")
         dispatch(getTodoSuccess(res.data));

    }).catch(err=>{
        dispatch(getTodoError());
    })
}



export const addTodos =(text) => (dispatch)=>{
    dispatch(addTodoLoading())
    axios({
        method:"post",
        url:"http://localhost:8000/todos",
        data:{
            title:text,
            status:false,
        }
    }).then(res=>{
        dispatch(addTodoSuccess());
        
   
        dispatch(getTodos())
    }).catch(err=>{
        dispatch(addTodoError());
    })
}
export const toggleTodo =(id,status) =>(dispatch)=>{
    dispatch(patchTodoLoading())
    axios({
        method:"patch",
        url:`http://localhost:8000/todos/${id}`,
        data:{
           status: !status
        }
    }).then(res=>{
        dispatch(patchTodoSuccess());
        
   
        dispatch(getTodos())
    }).catch(err=>{
        dispatch(patchTodoError());
    })
}

export     const deleteTodo =(id) =>(dispatch)=> {
    dispatch(patchTodoLoading())
    axios({
        method:"delete",
        url:`http://localhost:8000/todos/${id}`,
       
    }).then(res=>{
        dispatch(deleteTodoSuccess());
        
        
    dispatch(getTodos())
    }).catch(err=>{
        dispatch(deleteTodoError());
    })

}