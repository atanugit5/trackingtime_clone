import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Managament.module.css";

const Managament = () => {
  return (
    
    <div>
    <br/>
    <Navbar/>
      {/*************  heading *********************/}
      <div className={styles.main}>
        <div className={styles.heading}>
          <p className={styles.heading_para}>
            PROJECT MANAGEMENT TIME TRACKING SOFTWARE
          </p>
        </div>
        {/*************  Image-Content 1 *********************/}

        <div className={styles.image_Content_1}>
          <div className={styles.left_image_1}>
            <img
              className={styles.left_img}
              src="https://trackingtime.co/wp-content/uploads/2020/04/landing-designers-ind-Designer-Feature-02_1-768x525.png"
              alt="error is not found"
            />
          </div>

          <div className={styles.right_text1}>
            <p>Project Management Time Tracking Software to Improve Teamwork</p>
            <p className={styles.right_para}>
              <a href="/" className={styles.right_text_a}>
                Organize your team’s work,
              </a>{" "}
              communication, and leadership. Assign tasks, delegate
              responsibilities, and monitor the progress of your projects and
              tasks.
            </p>
          </div>
        </div>
        {/*************  Content-Image 2 *********************/}

        <div className={styles.image_Content_2}>
          <div className={styles.right_text2}>
            <p>Get a weekly overview of your team’s tasks and activities </p>
            <p className={styles.right_para1}>
              Manage all your time entries per Drag & Drop in a beautifully
              designed calendar view with{" "}
              <b className={styles.text1}> TrackingTime Project Management.</b>{" "}
              Editing your time entries has never been so easy!
            </p>
          </div>
          <div className={styles.left_image_2}>
            <img
              className={styles.left_img1}
              src="https://trackingtime.co/wp-content/uploads/2020/04/landing-remote-teams-ind-RemoteTeams-feature-03.svg"
              alt="error is not found"
            />
          </div>
        </div>

        {/*************  Image-Content 3*********************/}

        <div className={styles.image_Content_1}>
          <div className={styles.left_image_1}>
            <img
              className={styles.left_img}
              src="https://trackingtime.co/wp-content/uploads/2020/04/landing-consultor-ind-Consultor-feature-04.svg"
              alt="error is not found"
            />
          </div>

          <div className={styles.right_text1}>
            <p>Billable hours vs. non-billable hours</p>
            <p className={styles.right_para}>
              {" "}
              Learn how much time your team spends on meetings, answering
              emails, and other{" "}
              <a href="/" className={styles.right_text_a}>
                non-billable
              </a>{" "}
              tasks and hours and improve the profitability of your projects
              with our{" "}
              <b className={styles.text1}>
                project management time tracking software.
              </b>
            </p>
          </div>
        </div>

        {/*************  tasks -section*********************/}

        <div className={styles.main_tasks_section}>
          <div className={styles.right_tasks_section}>
            <div className={styles.make}>Make common tasks public</div>
            <div className={styles.assign}>Assign tasks to multiple people</div>
            <div className={styles.duplicate}>
              Duplicate common tasks and projects
            </div>
          </div>

          <div className={styles.image_tasks_section}>
            <img
              className={styles.imgage1}
              src="https://trackingtime.co/wp-content/uploads/2020/05/Common-Tasks.svg"
              alt="/"
            />
          </div>
        </div>

        {/*************  Image-Content 4*********************/}

        <div className={styles.image_Content_1}>
          <div className={styles.left_image_1}>
            <img
              className={styles.left_img}
              src="https://trackingtime.co/wp-content/uploads/2020/05/Due-DAte@2x-768x525.png"
              alt="error is not found"
            />
          </div>

          <div className={styles.right_text1}>
            <p>Track project due dates</p>
            <p className={styles.right_para}>
              Set <b className={styles.text1}> due dates for your projects</b>{" "}
              and tasks and sync them automatically with your favorite calendar
              apps like{" "}
              <a href="/" className={styles.right_text_a}>
                Google Calendar
              </a>{" "}
              or{" "}
              <a href="/" className={styles.right_text_a}>
                Outlook.
              </a>
            </p>
          </div>
        </div>

        {/*************  Content-Image 5 *********************/}

        <div className={styles.image_Content_3}>
          <div className={styles.right_text3}>
            <p>Project management and team sync</p>
            <p className={styles.right_para3}>
              Be updated with your{" "}
              <a href="/" className={styles.right_text_a}>
                team’s projects,
              </a>{" "}
              <b className={styles.text1}>TrackingTime </b>allows you to know
              which project each person is
              <b className={styles.text1}> working on,</b> you could organize
              and prioritize it according to the work in the office for a better{" "}
              <b className={styles.text1}> project tracking.</b>
            </p>
          </div>
          <div className={styles.left_image_2}>
            <img
              className={styles.left_img1}
              src="https://trackingtime.co/wp-content/uploads/2020/05/Priority.svg"
              alt="error is not found"
            />
          </div>
        </div>

        {/*************  Image-Content 6*********************/}

        <div className={styles.image_Content_1}>
          <div className={styles.left_image_1}>
            <img
              className={styles.left_img}
              src="https://trackingtime.co/wp-content/uploads/2020/05/Priority-tasks.svg"
              alt="error is not found"
            />
          </div>

          <div className={styles.right_text1}>
            <p>Prioritizing tasks with our project tracking software</p>
            <p className={styles.right_para}>
              Not all tasks are the same in terms of importance or impact.
              Prioritizing your tasks will help you to get better organized and
              <a href="/" className={styles.right_text_a}>
                {" "}
                manage your team’s
              </a>{" "}
              workload efficiently.
            </p>
          </div>
        </div>

        {/*************  Content-Image 7 *********************/}

        <div className={styles.image_Content_2}>
          <div className={styles.right_text2}>
            <p>Granular user roles and permissions </p>
            <p className={styles.right_para1}>
              {" "}
              Use <b className={styles.text1}>user roles</b> (admins, project
              managers, coworkers) and advanced permission to set up different
              access levels and project tasks for different groups of users.
            </p>
          </div>
          <div className={styles.left_image_2}>
            <img
              className={styles.left_img1}
              src="https://trackingtime.co/wp-content/uploads/2020/05/Attendance-Feature-02.svg"
              alt="error is not found"
            />
          </div>
        </div>

        {/*************  Image-Content 8*********************/}

        <div className={styles.image_Content_1}>
          <div className={styles.left_image_1}>
            <img
              className={styles.left_img}
              src="https://trackingtime.co/wp-content/uploads/2020/05/Duplicate.svg"
              alt="error is not found"
            />
          </div>

          <div className={styles.right_text1}>
            <p>Duplicate common tasks and projects</p>
            <p className={styles.right_para}>
              Do you often work on similar activities? TrackingTime’s task and
              <b className={styles.text1}> project tracking</b> make it easy to
              save time on project setup by duplicating existing projects and
              tasks–– with just one click.
            </p>
          </div>
        </div>

        <div className={styles.heading1}>
          <p className={styles.heading_para1}>
            TAKE CONTROL OF YOUR PROJECTS AND TASKS.
          </p>
        </div>

        <div className={styles.start_Button}>
          <button type="button">start free trial</button>
        </div>
      </div>
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
  );
};

export default Managament;
