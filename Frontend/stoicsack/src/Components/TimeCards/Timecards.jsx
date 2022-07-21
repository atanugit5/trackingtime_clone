import React from "react";
import styles from "./Timecards.module.css";
import Navbar from "../Navbar/Navbar";
const Timecards = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className={styles.main_time}>
        <div className={styles.heading1}>
          <p className={styles.heading_para1}>
            TIME CARDS TO TRACK YOUR EMPLOYEES’ HOURS
          </p>
        </div>

        {/*************  Image-Content 1 *********************/}

        <div className={styles.image_Time_1}>
          <div className={styles.left_image_time_1}>
            <img
              className={styles.left_img_time}
              src="https://trackingtime.co/wp-content/uploads/2020/04/timecards-feature01.jpg"
              alt="error is not found"
            />
          </div>

          <div className={styles.right_text1}>
            <p>Online time cards for easy clock in and out</p>
            <p className={styles.right_para}>
              Employees can clock in and out from the{" "}
              <b className={styles.text1}>TrackingTime time cards,</b>
              using their smartphones, or directly in{" "}
              <a href="/" className={styles.right_text_a}>
                Slack
              </a>{" "}
              and{" "}
              <a href="/" className={styles.right_text_a}>
                Microsoft Teams.
              </a>
            </p>
          </div>
        </div>

        {/*************  Content-Image 2 *********************/}

        <div className={styles.image_Content_2}>
          <div className={styles.right_text2}>
            <p>Get a monthly overview of your team’s attendance</p>
            <p className={styles.right_para1}>
              Whether you have 1 or 100 employees,{" "}
              <b className={styles.text1}>TrackingTime</b> automatically creates
              monthly{" "}
              <a href="/" className={styles.right_text_a}>
                attendance data{" "}
              </a>
              for your entire team.
            </p>
          </div>
          <div className={styles.left_image_2}>
            <img
              className={styles.left_img1}
              src="https://trackingtime.co/wp-content/uploads/2020/04/Timecard-ind-Timecard-feature-01@2x-1-768x525.png"
              alt="error is not found"
            />
          </div>
        </div>

        {/*************  Image-Content 3 *********************/}

        <div className={styles.image_Time_3}>
          <div className={styles.left_image_time_1}>
            <img
              className={styles.left_img_time}
              src="https://trackingtime.co/wp-content/uploads/2020/04/Timecard-ind-Timecard-feature-02@2x-1-768x525.png"
              alt="error is not found"
            />
          </div>

          <div className={styles.right_text3}>
            <p>Track breaks, overtime hours and time off</p>
            <p className={styles.right_para}>
              Set  <b className={styles.text1}>work schedules</b> for your employees and <a href="/" className={styles.right_text_a}> keep track </a>of lunch
              breaks, overtime hours and paid time off, based on your own
              policies.
             
            </p>
          </div>
        </div>


                

               
      </div>
    </div>
  );
};

export default Timecards;
