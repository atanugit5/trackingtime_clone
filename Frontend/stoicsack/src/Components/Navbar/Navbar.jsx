import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { BiChevronDown } from "react-icons/bi";
import { useSelector,useDispatch} from "react-redux"
import { logoutaction } from "../../Store/Login/Loginaction";
const Navbar = () => {
  let id =localStorage.getItem("userid")||""
  let name =localStorage.getItem("username")||""
   const {isError,logemail,logid,logusername,loggedin,message}=useSelector((state)=>state.login)
  // console.log("userid in navbar",id)
  // console.log("username in navbar",name)
  const dispatch=useDispatch()
  let handlelogout=()=>{
     dispatch(logoutaction())

  }
  return (
    <>
      <div className={styles.skc1}>
        <div className={styles.sk1}>
          <div className={styles.skc11}>
          <Link
              style={{
                textDecoration: "none",
                color: "#282828",
                fontSize: "0.8rem",
                fontWeight: "700",
              }}
              to="/"
            >
            <img
              src="https://trackingtime.co/wp-content/uploads/2019/10/tracking-time-logo-blue.png"
              alt=""
            />
            </Link>
          </div>
          <div className={styles.skc12}>
            <Link
              style={{
                textDecoration: "none",
                color: "#282828",
                fontSize: "0.8rem",
                fontWeight: "700",
              }}
              to="/integrations"
            >
              INTEGRATIONS
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "#282828",
                fontSize: "0.8rem",
                fontWeight: "700",
              }}
              to="/blog/blogs"
            >
              BLOG
            </Link>
            <div className={styles.skhover}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#282828",
                  fontSize: "0.8rem",
                  fontWeight: "700",
                }}
                to=""
              >
                FEATURES
              </Link>
              <h2>
                <BiChevronDown />
              </h2>
              <div className={styles.skc123}>
                <br />
                <Link style={{fontWeight: "700",textDecoration:"none",color:"black",}}to="">Time Tracker</Link>
                <br />
                <br />
                <br />
                <Link style={{fontWeight: "700",textDecoration:"none",color:"black"}}to="/project-management">Project Managment</Link>
                <br />
                <br />
                <br />
                <Link style={{fontWeight: "700",textDecoration:"none",color:"black"}}to="">Online Timesheet</Link>
                <br />
                <br />
                <br />
                <Link style={{fontWeight: "700",textDecoration:"none",color:"black"}}to="/time-cards">Time Card</Link>
                <br />
                <br />
                <br />
                <Link style={{fontWeight: "700",textDecoration:"none",color:"black"}}to="">Attendance Tracking</Link>
                <br />
                <br />
                <br />
                <Link style={{fontWeight: "700",textDecoration:"none",color:"black"}} to="">Time Reporting</Link>
              </div>
            </div>

           {id===""&&<button className={styles.skc121}>TRY IT FREE</button>} 
          
           {id===""&&<Link style={{textDecoration:"none"}} to="/login"> <button className={styles.skc122}>Login</button></Link>}
           {id!==""&&<Link style={{textDecoration:"none"}} to="/login"> <button className={styles.skc122}>Hi {name}</button></Link>}
           {id!==""&&<button onClick={handlelogout} className={styles.skc121}>Logout</button>}
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Navbar;
