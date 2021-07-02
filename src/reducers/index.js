import isLoggedReducer from "./isLogged";
import counterReducer from "./counter";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged:isLoggedReducer
})

export default allReducers;