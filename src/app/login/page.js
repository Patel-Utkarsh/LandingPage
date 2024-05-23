"use client"
import axios, { Axios } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import {useDispatch, useSelector } from "react-redux";
import auth, { setToken, setUser } from "@/redux/features/auth";
import { useMemo } from "react";
import Loader from "@/components/Ldr";
import { setLoader } from "@/redux/features/loader";


export default function Login() {

    const dispatch = useDispatch();
    const router = useRouter();
    const {loader} = useSelector((state)=>state.loader);
   
 
    const {token} = useSelector((state)=>state.auth);
    //console.log(token);
    if(token) {
       
        router.push('/');
    
    
    }

  
 
    dispatch(setLoader(false));

    const [userData,setUserData] = useState({
        username : "",
        password : ""

    })
   

   async function login() {
        dispatch(setLoader(true));
        const res = await 
        fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            
            username: userData.username,
            password: userData.password,
            expiresInMins: 30, 
          })
        });
        const data = await res.json();
        //console.log(data);
        dispatch(setLoader(false));

        if(data.token) {
            toast.success('login successfull');
            
            
            dispatch(setToken(data.token));
            dispatch(setUser(data));
            localStorage.setItem("token111",JSON.stringify(data.token));
           
            //console.log(token);
            router.push('/');
            return;

        }

        toast.error('Invalid credentials')

        
    }




    const [viewPass,setViewPass] = useState(false);
    

    function inputhandler(event) {
        const {name,value} = event.target;

       setUserData((prev)=>({
        ...prev,
        [name]  : value
       }))

    }

    function submitHandler() {
        if(userData.email === "" || userData.password === "") {
            toast.error('Please fill all the fields');
            return
        }

        login();
    }

    if(loader) return <Loader></Loader>


    return( 
    <div className="h-[100vh] w-full flex justify-center items-center ">
        <div className="text-black bg-white border-black border-[1px] p-10 flex flex-col gap-5 ">
            <p className="font-bold text-4xl text-gray-500">Login</p>
            <div className="flex flex-col gap-4">
                <input type="text" className="border-gray-300 border-[2px]  p-2 pl-4 pr-4 bg-[#d7e2f4]" onChange={inputhandler} name="username" placeholder="Username"></input>
                <div className="relative">
                    <input type={viewPass? `text` : `password`} className="border-gray-300 border-[2px]  p-2 pl-4 pr-4 bg-[#d7e2f4]" onChange={inputhandler} name="password" placeholder="Password"></input>

                   {viewPass ? <FaEyeSlash size={20} className="absolute top-2 right-4 cursor-pointer" onClick={()=>setViewPass(!viewPass)}></FaEyeSlash> : <FaEye size={20} onClick={()=>setViewPass(!viewPass)} className="absolute top-2 right-4 cursor-pointer"></FaEye>}
 
                </div>
                

            </div>
           
            <p className="font-bold">Forget Password?</p>
            <button className="bg-custom-gradient w-[50%] mx-auto pt-2 pb-2 text-white font-bold rounded-sm" onClick={()=>submitHandler()}>Log In</button>

        </div>

        

    </div>
    );
}