import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import { loginaction, logoutaction } from '../../Store/Login/Loginaction'
import { signupaction } from '../../Store/Signup/Signupaction'
import styles from "./Login.module.css"
export const Login = () => {
  let [canvisit,setCanvisit]=React.useState(false)
  let [signupdetail,setSignupdetail]=React.useState({email:"",password:""})
  let [logindetail,setLogindetail]=React.useState({email:"",password:""})
  let [signuprender,setSignuprender]=React.useState(false)
  const {email,id,signedin,signupisLoading}=useSelector((state)=>state.signin)
  const {isLoading,isError,logemail,logid,logusername,loggedin,message}=useSelector((state)=>state.login)
  let navigate=useNavigate()
  let dispatch=useDispatch()
  let handlesignupchange=(e)=>{
    setSignupdetail({...signupdetail,[e.target.name]:e.target.value})
  }
  let handlesignupsubmit=(e)=>{
    e.preventDefault()
    dispatch(signupaction(signupdetail))
   
  }


  let handleloginchange=(e)=>{
    setLogindetail({...logindetail,[e.target.name]:e.target.value})
  }


  let handleloginsubmit=(e)=>{
    e.preventDefault()
    dispatch(loginaction(logindetail))
    //  if(message==="wrong credentials")
    //  {
    //   setCanvisit(true)
    //  }
    
  }
  let showsignup=()=>{
    console.log("in show signup")
    setSignuprender(true)
  }
  let showlogin=()=>{
    //console.log("in show signup")
    setSignuprender(false)
  }
 
  let handlelogout=()=>{
    dispatch(logoutaction())
  }
  return ( 
    <div className={styles.prmaindiv}>
          <div className={styles.prleftdiv}>
            <img src="https://pro.trackingtime.co/img/login/1.svg"></img>
          </div>
          <div className={styles.prrightdiv}>
            <span style={{fontSize:"3vh"}}>TRACKING TIME</span>
            <div className={styles.prbuttondiv}>
                <button><img src="https://pro.trackingtime.co/img/login/google-logo.png"></img><span>Sign up with Google</span></button>
                <button><img src="https://pro.trackingtime.co/img/login/microsoft-logo.png"></img><span>Signup with Microsoft</span></button>
                <button><img src="https://pro.trackingtime.co/img/login/apple-logo.png"></img><span>Signup with Apple</span></button>
                
            </div>
            {signuprender ?<span>Sign up with Email</span>:<span>Sign in with Email</span>}
            

            {/*............ Login form.................... */}
            { !signuprender &&
                <div>
                    {<div className={styles.prlogin} >
                        {message==="wrong credentials" && <span> Wrong Credentials</span>}
                        <form onSubmit={handleloginsubmit}style={{display:"grid",width:"30%",margin:"auto"}}>
                          <input onChange={(e)=>handleloginchange(e)} value={logindetail.email} name="email" type="text"placeholder=' Email'></input>
                          <input onChange={(e)=>handleloginchange(e)} value={logindetail.password} name="password" type="password"placeholder='Password'></input>
                          <div style={{fontSize:"12px",display:"flex",justifyContent:"flex-end",marginTop:"2vh"}}>Forgot your password? <span style={{textDecoration:"underline"}}>Retrieve</span></div>
                          {isLoading ? <button style={{backgroundColor:"black",color:"white"}}>Logging in...</button>:<button style={{backgroundColor:"black",color:"white",marginTop:"1vh"}} type="submit">Login</button>}
                          <span style={{marginTop:"2vh"}}>Dont have an account? <span style={{cursor:'pointer',textDecoration:"underline",marginTop:"2vh"}} onClick={showsignup}>Signup</span></span>
                          <span>Terms of service / Privacy Policy</span>
                          {loggedin  && navigate("/")}
                        </form>
                            
                      </div>
                    }
                
                </div>

            }
            <br/>
            <br/>

                  
            {/*............ Signup form.................... */}
              { signuprender &&
                <div>
                { 
                <div className={styles.prsignup}>
                  <form onSubmit={handlesignupsubmit}style={{display:"grid",width:"30%",margin:"auto"}}>
                  <input onChange={(e)=>handlesignupchange(e)}value={signupdetail.email} name="email" type="text" placeholder='Email'></input>
                  <input onChange={(e)=>handlesignupchange(e)}value={signupdetail.password} name="password" type="password" placeholder='Password'></input>
                  
                  <div style={{display:"grid",marginTop:"5px"}}>
                    <input style={{height:"2vh"}}type="checkbox"></input>
                    <span style={{width:"18vw"}}>I agree with terms of service & Privacy policy</span>
                  </div>
                  {signupisLoading ? <button style={{backgroundColor:"black",color:"white",marginTop:"1vh"}}type="submit">Signing in ...</button>:<button style={{backgroundColor:"black",color:"white",marginTop:"1vh"}}type="submit">Signup</button> }
                  <div style={{cursor:'pointer',textDecoration:"underline"}}onClick={showlogin}>Back to login</div>
                  <span style={{marginTop:"2vh"}}>Terms of service / Privacy Policy</span>
                  </form>
                  
                  </div>
                }
                 
            </div>
              }
        </div>
    </div>

    
  )
}
