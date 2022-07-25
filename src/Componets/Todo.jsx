import React  from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {addTodos,deleteTodo,getTodos, toggleTodo } from "../redux/todo/actions"
const Todo=()=>{
    const[text ,setText] =useState("")
    const dispatch =useDispatch();
    const {loading ,error, data} =useSelector(state=> state.todo.todos)

   
    useEffect(()=>{
      
        dispatch(getTodos());
       
    },[])

    const handleAdd=()=>{
      dispatch(addTodos(text))
        setText("")
    }
   

    const handleToggle=(id,status)=>{
                dispatch(toggleTodo(id,status))
    }

    
    const handleDelete=(id)=>{
       dispatch(deleteTodo(id))
    }
    return(
        <>
        <input placeholder="ADD Somthing" value={text} onChange={(e)=> setText(e.target.value)}/>
        <button onClick={handleAdd}>ADD</button>
        {
            loading ?<div>...lodaing</div>
            :error ? <div>somthing went  wrong  </div>
            :data.map((el)=>{
              return  <li  key={el.id}>
                <div>

                {el.title}
                </div>
                <div>
                    <button onClick={()=>handleToggle(el.id,el.status)}>{el.status ? "done" : "not Done"}</button>
                    <button onClick={()=>handleDelete(el.id)}>Delete</button>

                </div>
              
              
              </li>
            })
             
            
        }
        

        </ >
    )
}
export default Todo;