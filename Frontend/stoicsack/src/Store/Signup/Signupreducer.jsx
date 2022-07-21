import { SIGNUP_LOADING, SIGNUP_PROCESS } from "./Signuptype"


let initialstate={signedin:false,email:"",id:"",message:"",signupisLoading:false}
export const signupreducer=(state=initialstate,action)=>{
    switch(action.type)
    {   case(SIGNUP_LOADING):
        {
            return({...state,signupisLoading:true})
        }
        case SIGNUP_PROCESS:
            {   let {email,_id,signedup}=action.payload
                return {...state,email:email,id:_id,signedin:signedup,signupisLoading:false}
            }
            default:
                {
                    return {...state}
                }
    }


}