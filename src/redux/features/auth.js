"use client"
import { createSlice} from "@reduxjs/toolkit";

const getTokenFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      // Check if we're in the browser
      const token = localStorage.getItem("token111");
      return token ? JSON.parse(token) : null;
    }
    return null;
};


const initialState = {
    user : null,
    token : getTokenFromLocalStorage()
    



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