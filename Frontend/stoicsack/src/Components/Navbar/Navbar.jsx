import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <div className={styles.skc1}>
        <div className={styles.sk1}>
          <div className={styles.skc11}>
            <img
              src="https://trackingtime.co/wp-content/uploads/2019/10/tracking-time-logo-blue.png"
              alt=""
            />
          </div>
          <div className={styles.skc12}>
            <Link
              style={{
                textDecoration: "none",
                color: "#282828",
                fontSize: "0.8rem",
                fontWeight: "600",
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
                fontWeight: "600",
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
                  fontWeight: "600",
                }}
                to="/features"
              >
                FEATURES
              </Link>
              <h2>
                <BiChevronDown />
              </h2>
              <div className={styles.skc123}>
                <br />
                <Link style={{textDecoration:"none",color:"black"}}to="">Time Tracker</Link>
                <br />
                <br />
                <br />
                <Link style={{textDecoration:"none",color:"black"}}to="/project-management">Project Managment</Link>
                <br />
                <br />
                <br />
                <Link style={{textDecoration:"none",color:"black"}}to="">Online Timesheet</Link>
                <br />
                <br />
                <br />
                <Link style={{textDecoration:"none",color:"black"}}to="/time-cards">Time Card</Link>
                <br />
                <br />
                <br />
                <Link style={{textDecoration:"none",color:"black"}}to="">Attendance Tracking</Link>
                <br />
                <br />
                <br />
                <Link style={{textDecoration:"none",color:"black"}} to="">Time Reporting</Link>
              </div>
            </div>

            <button className={styles.skc121}>TRY IT FREE</button>
            <button className={styles.skc122}><Link style={{textDecoration:"none",color:"white"}} to="/login">Login</Link></button>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Navbar;
