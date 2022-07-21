import axios from "axios"
import { SIGNUP_LOADING, SIGNUP_PROCESS } from "./Signuptype"

export const signupaction=(signupdata)=>(dispatch)=>{
    dispatch({type:SIGNUP_LOADING})
    axios.post("https://secret-basin-55427.herokuapp.com/auth/signup",signupdata)
    .then((resp)=>{
        console.log(resp.data)
        dispatch({type:SIGNUP_PROCESS,payload:resp.data})
    })
}