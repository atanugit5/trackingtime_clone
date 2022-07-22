import React from "react";
import styles from "./Blog.module.css";
export const Blogcat = ({ category }) => {
  return (
    <div>
      <div className={styles.top_article}>
        <p>TIMEKEEPING AND PRODUCTIVITY ARTICLES</p>
        <img
          src="https://trackingtime.co/wp-content/uploads/2022/07/Solve-Your-Freelancing-Productivity-and-Budget-Problems.svg"
          alt="How Time Tracking Can Solve Your Freelancing Productivity and Budget Problems"
        />
        <h1>
          How Time Tracking Can Solve Your Freelancing Productivity and Budget
          Problems
        </h1>
        <button className={styles.top_articale}>read article</button>
      </div>
      <div className={styles.grid_structured}>
        {category.map((elem) => (
          <div key={elem._id} className={styles.grid_individ_child}>
            <div>
              <img src={elem.thumburl} alt={elem.thumburl} />
            </div>
            <div>
              <h3>{elem.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
