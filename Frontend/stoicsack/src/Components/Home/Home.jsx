import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";

import styles from "./Home.module.css";
const Home = () => {
  const [skInput1, setSkInput1] = useState("");
  return (
    <>
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
      </div>
    </>
  );
};

export default Home;
