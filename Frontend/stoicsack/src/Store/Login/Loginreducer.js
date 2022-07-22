import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_PROCESS, LOGOUT } from "./Logintype";

let initialstate={isLoading:false,isError:false,logemail:"",logid:"",logusername:"",loggedin:false,message:"fine"}
export const loginreducer=(state=initialstate,action)=>{
 switch(action.type)
 {  case (LOGIN_LOADING):
    {
        return ({...state,isLoading:true})
    }
    case(LOGIN_PROCESS):
    {  const {email,username,_id,loggedin,message}=action.payload
        console.log("in login reducer")
        if(loggedin)
        {       localStorage.setItem("userid",JSON.stringify(_id))
                localStorage.setItem("username",username)

        }
    
        return {...state,logemail:email,logid:_id,logusername:username,loggedin:loggedin,isLoading:false,message:message||"fine"}
    }
    case (LOGIN_ERROR):
        {
            return({...state,isError:true})
        }
        case (LOGOUT):
            {   localStorage.removeItem("userid")
                localStorage.removeItem("username")
                return({...state,loggedin:false})
            }
    default:
        {
            return {...state}
        }
 }
}