import {combineReducers} from "redux"
import React from 'react'
import taskReducer from "./taskReducer"
const RootReducer = combineReducers({
tasks:taskReducer,
})
  


export default RootReducer
