import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css";
import { SliderData } from "./SlideData";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { GrLinkedin } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";



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
        <h3 className={styles.ska30}>
          THE FEATURES YOUR PROJECT MANAGEMENT APP IS MISSING.
        </h3>
        <div className={styles.ska31}>
          <div className={styles.ska311}>
            <img
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-1.svg"
              alt=""
            />
            <div className={styles.ska3112}>
              <h3 className={styles.ska3111}>
                Measure your team's productivity
              </h3>
            </div>
            <div className={styles.ska3113}>
              <p>
                Get a record of the worked hours and keep your projects in
                order, be abreast of ongoing or completed projects with our
                super friendly app.
              </p>
            </div>
          </div>
          <div className={styles.ska312}>
            <img
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-2.svg"
              alt=""
            />
            <div className={styles.ska3122}>
              <h3 className={styles.ska3121}>
                The most flexible reporting engine
              </h3>
            </div>
            <div className={styles.ska3123}>
              <p>
                Project budgeting, client billing, payroll, productivity
                analytics and much more: No matter what kind of reports you
                need, TrackingTime has got you covered.
              </p>
            </div>
          </div>
          <div className={styles.ska313}>
            <img
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-3.svg"
              alt=""
            />
            <div className={styles.ska3132}>
              <h3 className={styles.ska3131}>
                Monitor your team’s workload, in real time
              </h3>
            </div>
            <div className={styles.ska3133}>
              <p>
                See every work in progress and measure the productivity of your
                team by monitoring them in real time
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4th part starts from here */}
      <div className={styles.ska4}>
        <div style={{ height: "35vh" }}></div>
        <div className={styles.ska41}>
          <img
            src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/grupo.svg"
            alt=""
          />
        </div>
        <div className={styles.ska42}>
          <div className={styles.ska421}>
            <div className={styles.ska4211}>
              <h3>Add time tracking to your favorite business apps</h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#85898d",
                  marginTop: "3vh",
                  lineHeight: "4.5vh",
                }}
              >
                No matter where your employees work, TrackingTime works with
                them. Install the TrackingTime Button for Chrome and Firefox and
                track time right within the productivity apps your employees use
                everyday.
              </p>
              <button className={styles.ska42111}>SEE ALL</button>
            </div>
          </div>
          <div className={styles.ska422}>
            <img
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/asana.png"
              alt=""
            />
            <h3>Asana</h3>
            <p>
              Asana puts tasks and conversations together to enable teamwork
              without email.
            </p>
          </div>
          <div className={styles.ska423}>
            <img
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/trello.png"
              alt=""
            />
            <h3>Trello</h3>
            <p>
              Trello is a collaboration tool that organizes your projects into
              boards.
            </p>
          </div>
          <div className={styles.ska424}>
            <img
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/todoist.png"
              alt=""
            />
            <h3>Todoist</h3>
            <p>Todoist is a task manager thats useful, fast and easy to use.</p>
          </div>
          <div className={styles.ska425}>
            <img
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/smartsheet.png"
              alt=""
            />
            <h3>Smartsheet</h3>
            <p>
              Smartsheet is a web-based project and task management and work
              collaboration software.
            </p>
          </div>
        </div>
      </div>

      {/* 5th part starts from here */}
      <div className={styles.ska5}>
        <div style={{ height: "15vh" }}></div>
        <div className={styles.main_cards}>
          <div className={styles.cards}>
            <div className={styles.card_1}>
              <img
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-1.svg"
                alt="/"
              />
              <h2 className={styles.card_title}>Timecards Approval</h2>
              <p className={styles.card_para}>
                Track clock in and out times with no effort.
              </p>
            </div>

            <div className={styles.card_1}>
              <img
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-2.svg"
                alt="/"
              />
              <h2 className={styles.card_title}>Budgeting</h2>
              <p className={styles.card_para}>
                Keep your projects on time and budget.
              </p>
            </div>

            <div className={styles.card_1}>
              <img
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-3.svg"
                alt="/"
              />
              <h2 className={styles.card_title}>Work schedules</h2>
              <p className={styles.card_para}>
                Specify when your employees are expected to be at their job.
              </p>
            </div>

            <div className={styles.card_1}>
              <img
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-4.svg"
                alt="/"
              />
              <h2 className={styles.card_title}>Timesheet Audits</h2>
              <p className={styles.card_para}>
                Avoid data inconsistencies with just one click.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6th part starts from here */}

      <div className={styles.ska6}>
        <div className={styles.ska61}>
          <img
            className={styles.ska611}
            src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/bottom-action.svg"
            alt=""
          />
        </div>
        <div className={styles.ska62}>
          <h1>Get professional timesheets done in no time!</h1>
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
              <p className={styles.ska627}>Sing in with Google</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer part */}

      <div className={styles.ska7}>
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
                <p className={styles.ska627}>Sing in with Google</p>
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
  );
};

export default Home;
