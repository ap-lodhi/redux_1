import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer as todoReducer } from "./todo/reducer"
import {reducer as counterReducer} from "./counter/reducer"
import thunk from "redux-thunk"


const rootReducer =combineReducers({
    counter:counterReducer,
    todo:todoReducer

})
// const midd1 =(store)=>(next)=>(action)=>{
//     console.log("midd1 ",action.type)
//     if(typeof action ==="function"){
//       action(store.dispatch);
//     }
//     else{
//         next(action)
//     }
//    // next(action)
//     console.log("exting  mdd1")
// }

// const midd2 =(store)=>(next)=>(action)=>{
//     console.log("midd2 ",action.type)
//     next(action)
//     console.log("exting  mdd2")
// }


 export const store =createStore(rootReducer,compose( applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
 