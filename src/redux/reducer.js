"use client"
import {combineReducers} from "@reduxjs/toolkit";

import auth from "./features/auth";
import loader from "./features/loader";


const rootReducer  = combineReducers({
    auth,
    loader

  
})

export default rootReducer