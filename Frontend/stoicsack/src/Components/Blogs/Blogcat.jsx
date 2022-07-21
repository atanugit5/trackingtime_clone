import React from "react";
import styles from "./Blog.module.css";
export const Blogcat = ({ category }) => {
  return (
    <div className={styles.grid_structured}>
      {category.map((elem) => (
        <div key={elem._id}>
          <img src={elem.thumburl} alt={elem.thumburl} />
          <h3>{elem.title}</h3>
        </div>
      ))}
    </div>
  );
};
