import {combineReducers} from "redux"
import students from "./studentReducer"
const reducers = combineReducers({
    students: students
})

export default reducers;