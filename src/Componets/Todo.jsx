import React  from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { addTodoError, addTodoSuccess, getTodoError, getTodoLoading, getTodoSuccess } from "../redux/actions"
const Todo=()=>{
    const[text ,setText] =useState("")
    const dispatch =useDispatch();
    const {loading ,error, data} =useSelector(state=> state.todos)

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
    }
    return(
        <>
        <input placeholder="ADD Somthing" value={text} onChange={(e)=> setText(e.target.value)}/>
        <button onClick={handleAdd}>ADD</button>
        {
            loading ?<div>...lodaing</div>
            :error ? <div>somthing went  wrong  </div>
            :data.map((el)=>{
              return  <li key={el.id}>{el.title}</li>
            })
             
            
        }
        

        </ >
    )
}
export default Todo;