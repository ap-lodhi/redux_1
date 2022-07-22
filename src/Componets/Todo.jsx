import React  from "react"
import { useState } from "react"
const Todo=()=>{
    const[text ,setText] =useState("")

    const handleAdd=()=>{
        
    }
    return(
        <>
        <input placeholder="ADD Somthing" value={text} onChange={(e)=> setText(e.target.value)}/>
        <button onClick={handleAdd}>ADD</button>
        </ >
    )
}
export default Todo;