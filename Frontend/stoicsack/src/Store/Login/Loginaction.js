import axios from "axios";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_PROCESS, LOGOUT } from "./Logintype";

export const  loginaction=(logindata)=>(dispatch)=>{
  
    dispatch({type:LOGIN_LOADING})
    axios.post("https://secret-basin-55427.herokuapp.com/auth/login",logindata)
    .then((resp)=>{
        console.log(resp.data)
      
        dispatch({type:LOGIN_PROCESS,payload:resp.data})
    })
    .catch((e)=>{
        dispatch({type:LOGIN_ERROR})
    })
}

export const logoutaction=()=>(dispatch)=>{
    dispatch({type:LOGOUT})
}