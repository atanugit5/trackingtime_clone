import React from "react";
import style from "./integrations.module.css";
import Navbar from "../Navbar/Navbar";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import svgbackimg from "./inteBack.svg";

export const Integrations = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let res = await fetch(
      "https://boiling-bayou-95689.herokuapp.com/integrations"
    );
    let data = await res.json();
    setData(data);
  };
  const handleSearch = (e) => {
    let key = e.target.value;
    axios
      .get(`https://boiling-bayou-95689.herokuapp.com/integrations/${key}`)
      .then((r) => setData(r.data));
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <br />
      <Navbar />
      <br />
      <br />
      <div
        className={style.parent}
        style={{
          backgroundImage: `url(${svgbackimg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "25% 80%",
        }}
      >
        <h2 className={style.toph2}>TRACKING TIME BUTTON FOR CHROME</h2>
        <h1 className={style.toph1}>
          TrackingTime
          <br /> Integrations
        </h1>
        <h2 className={style.toph2}>
          TIME TRACKING INTEGRATIONS THAT YOU'LL LOVE
        </h2>
        <div className={style.inputDiv}>
          <input
            className={style.inPutAt}
            type="text"
            onChange={handleSearch}
            placeholder="SEARCH YOUR FAVOURIT APP!"
          />
          <IoIosSearch style={{ fontSize: "1.5rem", paddingTop: "1.2rem" }} />
        </div>
        <div className={style.dwnIp}>
          <p>
            Improve your time tracking and increase your productivity with these
            Integrations.
          </p>
          <p>
            See how much time you spend on each task or project! TrackingTime's
            integrations make it easy to keep track of your <br /> billable and
            non-billable tasks by integrating with more than 30 apps.
          </p>
        </div>
        <div className={style.dwnIp}>
          <p>
            TrackingTime can be integrated with other apps, such as project
            management, accounting, and customer support. Get
            <br /> instant timesheets and analytics with TrackingTime!
          </p>
        </div>
      </div>

      {data.length === 0 && (
        <h2
          style={{
            marginTop: "2rem",
            color: "red",
            letterSpacing: ".2em",
            fontFamily: "'Courier New', Courier, monospace",
          }}
        >
          WE COULDN'T FIND YOUR APP
        </h2>
      )}
      <div className={style.appendAt}>
        {data.map((el) => (
          <Link to={`/integrations/${el.id}`} key={el.id} className={style.sigLink} >
          <div className={style.singleAt}>
            <div className={style.logoDivAt1}>
              <img src={el.logo} alt={el.title} className={style.logoAt1} />
            </div>
            <h2>{el.title}</h2>
            <p>{el.intro}</p>
          </div>
          </Link>
        ))}
      </div>

      <div className={style.footInt}>
        <img
          src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/home/download-section/phone.png"
          alt=""
          className={style.footInt_Img}
        />

        <div className={style.footRight}>
          <h1>Track Everywhere</h1>
          <p>
            Track your time everywhere you work with our
            <br /> mobile apps for iOS and Android.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=co.trackingtime"
            target="_blank"
          >
            <img
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/home/download-section/playstore.png"
              alt=""
              className={style.footStore}
            />
          </a>
          <a
            href="https://itunes.apple.com/us/app/trackingtime-task-based-time/id909469423?mt=8&uo=4"
            target="_blank"
          >
            <img
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/home/download-section/apstore.png"
              alt=""
              className={style.footStore}
            />
          </a>
        </div>
      </div>
    </>
  );
};
