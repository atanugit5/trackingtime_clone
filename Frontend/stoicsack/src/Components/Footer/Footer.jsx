import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "../Home/Home.module.css"
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { GrLinkedin } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  const [skInput1, setSkInput1] = useState("");

  return (
    <><div className={styles.ska7}>
    <div style={{ height: "35vh" }}></div>
    <div className={styles.ska71}>
      <div className={styles.ska62}>
        <img
          src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/footer/tt.svg"
          alt=""
        />
        <h1>Get Started</h1>
        <p>
          Sign up today and join thousands of people around the world using
          TrackingTime to simplify their timesheets.
        </p>
        <div className={styles.ska621}>
          <input
            className={styles.ska622}
            type="text"
            value={skInput1}
            onChange={(e) => setSkInput1(e.target.value)}
            placeholder="Your Work Email"
          />
          <button className={styles.ska623}>START FOR FREE</button>
        </div>
        <p
          className={styles.ska624}
          style={{
            color: "black",
            fontSize: "0.8rem",
            fontWeight: "550",
            marginTop: "0.9vh",
          }}
        >
          14-day PRO trial included
        </p>
        <div className={styles.ska625}>
          <img
            className={styles.ska626}
            src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/google-key.png"
            alt=""
          />
          <Link to="">
            <p className={styles.ska627}>Sign in with Google</p>
          </Link>
        </div>
      </div>
    </div>
  </div>

  {/* real footer */}

  <div className={styles.ska8}>
    {/* <div style={{marginTop:"100vh"}}></div> */}
    <div className={styles.ska80}>
      <h6>Industries</h6>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Time tracking for Graphic Designers</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Time tracking software for Architects</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Time tracking for Remote Workers</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Time tracking for Marketing Teams</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Time tracking for Freelancers</p>
      </Link>
    </div>
    <div className={styles.ska81}>
      <h6>Product</h6>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Plans & Pricing</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Integrations</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Product Updates</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Slack Bot</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Microsoft Teams</p>
      </Link>
    </div>
    <div className={styles.ska82}>
      <h6>Features</h6>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Online Timesheet For Efficient Companies</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Time Tracker for every business</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Reports for billing and payroll to reduce</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>administrative work</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Attendance tracker for every business</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Project Management Time Tracking Software</p>
      </Link>
    </div>
    <div className={styles.ska83}>
      <h6>Apps</h6>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Web App</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Time Tracker app for Mac</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Time Tracker for Windows</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>iPhone app</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Android app</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Time Tracking for Chrome</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Time Tracking for Firefox</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Time Tracking for Safari</p>
      </Link>
    </div>
    <div className={styles.ska84}>
      <h6>Company</h6>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>About Us</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Blog</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Media Kit</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Terms of service</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Privacy Policy</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>DMCA Policy</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Impressum</p>
      </Link>
    </div>
    <div className={styles.ska85}>
      <div className={styles.ska851}>
        <h3>
          <AiFillTwitterCircle />
        </h3>
        <h3>
          <GrLinkedin />
        </h3>
        <h3>
          <BsFacebook />
        </h3>
      </div>
      <p style={{fontWeight:"900",fontSize:"0.8rem",textDecoration:"underline",marginTop:"2vh"}}>support@trackingtime.co</p>
      <p style={{fontSize:"0.8rem",color:"grey",marginTop:"3vh"}}>© 2022 TrackingTime, LLC</p>
    </div>
    <div className={styles.ska86}>
      <h6>Help & Support</h6>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Help Center</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Developers</p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#282828",
          lineHeight: "4vh",
          fontSize: "0.8rem",
        }}
        to=""
      >
        <p>Contact us</p>
      </Link>
    </div>
    <div className={styles.ska87}><h6>Choose Language</h6>
    <div className={styles.ska871}>

            
    <h4>English  </h4>
    <h2><BiChevronDown /></h2>
    

    <div className={styles.skc123}>
            <br />
            <Link style={{fontWeight: "700",textDecoration:"none",color:"black",}}to="">DEUTCSH</Link>
            <br />
            <br />
            <br />
            <Link style={{fontWeight: "700",textDecoration:"none",color:"black"}}to="/project-management">ESPANOL</Link>
            <br />
            <br />
            <br />
            <Link style={{fontWeight: "700",textDecoration:"none",color:"black"}}to="">PORTUGUES</Link>
           
          </div>
    </div>
    </div>
   
  </div>

</>
  )
}

export default Footer