import { combineReducers, createStore } from "redux";
import { reducer as todoReducer } from "./todo/reducer"
import {reducer as counterReducer} from "./counter/reducer"


const rootReducer =combineReducers({
    counter:counterReducer,
    todo:todoReducer

})
 export const store =createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())