import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "../Home/Home.module.css"

const Footer = () => {
  const [skInput1, setSkInput1] = useState("");

  return (
    <div>

    <div  className={styles.ska7}>
      <div style={{ height: "35vh" }}></div>
        <div className={styles.ska71}>

      <div className={styles.ska62}>
        <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/footer/tt.svg" alt="" />
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
      <p className={styles.ska624} style={{color:"black",fontSize:"0.8rem",fontWeight:"550",marginTop:"0.9vh"}}>14-day PRO trial included</p>
      <div className={styles.ska625}>
        <img
          className={styles.ska626}
          src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/google-key.png"
          alt=""
          />
        <Link to="">
          <p className={styles.ska627}>Sing in with Google</p>
        </Link>
      </div>
      </div>
          </div>
    </div></div>
  )
}

export default Footer