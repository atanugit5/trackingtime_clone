import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import styles from "./Home.module.css";
const Home = () => {
  const [skInput1, setSkInput1] = useState("");

  
  return (
    <>
    <br />
      <Navbar />

      <br />
      <br />

      <div className={styles.ska1}>
        <br />
        <h5 className={styles.ska111}>TRACKING TIME AND TRACKING SOFTWARE</h5>
        <h3 className={styles.ska112}>SET AND FORGET TIME TRACKING</h3>
        <div className={styles.ska113div}>
          <h1 className={styles.ska113}>
            Bring your productivity to the next level.
          </h1>
        </div>
        <div className={styles.ska12}>
          <input
            className={styles.ska121}
            type="text"
            value={skInput1}
            onChange={(e) => setSkInput1(e.target.value)}
            placeholder="Your Work Email"
          />
          <button className={styles.ska122}>START FOR FREE</button>
        </div>
        <p className={styles.ska123}>14-day PRO trial included</p>
        <div className={styles.ska124}>
          <img
          className={styles.ska125}
            src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/google-key.png"
            alt=""
          />
          <Link to=""><p className={styles.ska126}>Sing in with Google</p></Link>
        </div>
      </div>

{/* 2nd div start from here */}

      <div className={styles.ska2}>
        <br /><br /><br />
      <p className={styles.ska21}>Companies of all shapes and sizes use TrackingTime:</p>
<div className={styles.ska22}></div>
      </div>

      {/* 3 part starts from herer */}
      <div style={{height:"40vh"}}>
      </div>
    </>
  );
};

export default Home;
