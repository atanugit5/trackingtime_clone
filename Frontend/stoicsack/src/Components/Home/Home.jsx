import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css";
import { SliderData } from "./SlideData";

const Home = () => {
  const [skInput1, setSkInput1] = useState("");
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 200,
  //   slidesToShow: 3,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

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
          <Link to="">
            <p className={styles.ska126}>Sing in with Google</p>
          </Link>
        </div>
      </div>

      {/* 2nd div start from here */}

      <div className={styles.ska2}>
        <br />
        <br />
        <br />
        <p className={styles.ska21}>
          Companies of all shapes and sizes use TrackingTime:
        </p>
        <div className={styles.ska22}>
          {/* <Slider > */}
          {SliderData.map((el, i) => (
            <div key={i}>
              <img style={{ width: "25vh" }} src={el.pic} alt="" />
            </div>
          ))}
          {/* </Slider> */}
        </div>
      </div>

      {/* 3 part starts from herer */}
      <div>
        <h3  className={styles.ska30}>
          THE FEATURES YOUR PROJECT MANAGEMENT APP IS MISSING.
        </h3>
        <div className={styles.ska31}>
          <div className={styles.ska311}>
            <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-1.svg" alt="" />
            <h1>  </h1>
          </div>
          <div className={styles.ska312}>
            <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-2.svg" alt="" />
           {/* <h1>TYgCKfUweBRJ2dA4RGuKJuW3dsDwp7TbitTYgCKfUweBRJ2dA4RGuKJuW3dsDwp7Tbit</h1> */}
          </div>
          <div className={styles.ska313}>
            <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-3.svg" alt="" />
          </div>
        </div>
      </div>

      {/* 4th part starts from here */}
      <div style={{height:"10vh"}}></div>


      {/* 5th part starts from here */}
    </>
  );
};

export default Home;
