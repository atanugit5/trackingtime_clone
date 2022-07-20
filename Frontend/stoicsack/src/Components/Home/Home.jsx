import React from "react";
import Navbar from "../Navbar/Navbar";

import styles from "./Home.module.css";
const Home = () => {
  return (
    <>
      <Navbar />

      <br />
      <div className={styles.ska1}>
        <h1>Home</h1>
      </div>
    </>
  );
};

export default Home;
