import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCnt, decCnt } from "../redux/actions";
const Counter =()=>{
    const dispatch =useDispatch();
//    let count=0;
   const count=useSelector(state=>state.count)
//    console.log(state, "jfdi")
    const handleInc =()=>{
        dispatch(addCnt());
    }
    const handleDec =()=>{
      dispatch(decCnt())
    }
    return(
        <>
        <div>{count}</div>
        <button onClick={handleInc}>inc</button>
        <button onClick={handleDec}>dec</button>
        </>
    )
}
export {Counter}