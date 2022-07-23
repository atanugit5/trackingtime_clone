import React from "react";
import style from "./inte.module.css";
import Navbar from "../Navbar/Navbar";

export const Integration = () => {
  let data=JSON.parse(localStorage.getItem("integrationSingleData"))
  console.log("data",data)
  return (
    <>
      <br />
      <Navbar />
      <br />
      <video loop muted autoPlay style={{ width: "100%" }}>
        <source
          src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/time-tracking-for-airtable.mp4"
          type="video/mp4"
        />
      </video>
      <div className={style.parent}>
        <div className={style.mainDiv}>
          <div className={style.logoDiv}>
            <img
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/airtable.png"
              alt=""
              className={style.logo}
            />
          </div>
          <h1 className={style.head1}>Time Tracker for Airtable</h1>
          <a
            href="https://pro.trackingtime.co/#signup"
            target="_blank"
            className={style.aTag}
          >
            <p className={style.installAt}>INSTALL</p>
          </a>
          <div className={style.para}>
            <h3 className={style.para1}>Track your time right from Airtable</h3>
            <p className={style.para2}>
              With the Tracking Time Button Extension for Chrome enhance
              Airtable with time tracking.
            </p>
            <p className={style.para3}>
              Get automatic timesheets and enjoy TrackingTime’s in-depth
              analytics.
            </p>
          </div>
          <h4 className={style.aboutAt}>ABOUT AIRTABLE</h4>
          <a
            href="https://pro.trackingtime.co/#signup"
            target="_blank"
            className={style.aTag}
          >
            <p className={style.visitAt}>VISIT AIRTABLE</p>
          </a>
          <p className={style.descrip}>
            <span>
            Airtable looks like a fast and flexible spreadsheet, but it's
            actually a relational database that can store almost anything. Save
            time by working together Airtable's built for collaboration and lets
            you share your data, chat with teammates, and see changes as they
            happen. Manage your data from anywhere Airtable syncs across all
            your devices to keep your data up-to-date wherever you go. Our
            mobile app </span><a href="" target={"_blank"}><span style={{color:"black"}}>Read More</span></a>
          </p>
          <h3 className={style.qus}>Is TrackingTime easy to connect with Airtable?</h3>
          <div className={style.ans}>Yes, there is no setup required. In just a few clicks, you can start tracking your time right from Airtable with the TrackingTime Extension for Chrome and Firefox.</div>
          <h3 className={style.qus}>Is TrackingTime easy to connect with Airtable?</h3>
          <div className={style.ans}>Yes, there is no setup required. In just a few clicks, you can start tracking your time right from Airtable with the TrackingTime Extension for Chrome and Firefox.</div>
          <h3 className={style.qus}>Is TrackingTime easy to connect with Airtable?</h3>
          <div className={style.ans}>Yes, there is no setup required. In just a few clicks, you can start tracking your time right from Airtable with the TrackingTime Extension for Chrome and Firefox.</div>
        </div>
      </div>
    </>
  );
};
