import React  from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { addTodoError, addTodoLoading, addTodoSuccess, deleteTodoError, deleteTodoSuccess, getTodoError, getTodoLoading, getTodoSuccess, patchTodoError, patchTodoLoading, patchTodoSuccess } from "../redux/todo/actions"
const Todo=()=>{
    const[text ,setText] =useState("")
    const dispatch =useDispatch();
    const {loading ,error, data} =useSelector(state=> state.todo.todos)

    const getTodos =()=>{
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
    useEffect(()=>{
      
        getTodos()
       
    },[])
    const handleAdd=()=>{
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
            
        getTodos()
        }).catch(err=>{
            dispatch(addTodoError());
        })
        setText("")
    }

    const handleToggle=(id,status)=>{
        dispatch(patchTodoLoading())
        axios({
            method:"patch",
            url:`http://localhost:8000/todos/${id}`,
            data:{
               status: !status
            }
        }).then(res=>{
            dispatch(patchTodoSuccess());
            
        getTodos()
        }).catch(err=>{
            dispatch(patchTodoError());
        })
    }
    const handleDelete=(id)=>{
        dispatch(patchTodoLoading())
        axios({
            method:"delete",
            url:`http://localhost:8000/todos/${id}`,
           
        }).then(res=>{
            dispatch(deleteTodoSuccess());
            
             getTodos()
        }).catch(err=>{
            dispatch(deleteTodoError());
        })
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
                    <button onClick={()=>handleToggle(el.id)}>{el.status ? "done" : "not Done"}</button>
                    <button onClick={()=>handleDelete(el.id)}>Delete</button>

                </div>
              
              
              </li>
            })
             
            
        }
        

        </ >
    )
}
export default Todo;