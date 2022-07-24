import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCnt, decCnt } from "../redux/counter/action";

const Counter =()=>{
    const dispatch =useDispatch();
//    let count=0;
   const count=useSelector(state=>state.counter.count)
//    console.log(state, "jfdi")
    const handleInc =()=>{
        dispatch(addCnt(5));
    }
    const handleDec =()=>{
      dispatch(decCnt(10))
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