"use client"
import { createSlice} from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { parseCookies } from 'nookies';

const cookies  = parseCookies();




const initialState = {
    user : null,
    token : cookies.token ? cookies.token : null
    



}

 const auth = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        setToken(state,action) {
            state.token = action.payload;

        },

        setUser(state,action) {
            state.user = action.payload;

        }
    }

})

export const {setToken,setUser} = auth.actions;
export default auth.reducer;