import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Blog.module.css";
import { Blogcat } from "./Blogcat";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export const Blog = () => {
  const navfunc = useNavigate();
  const { category } = useParams();
  const [sitedata, setsitedata] = useState([]);
  const [liActive, setLiActive] = useState(category);
  const focouse_controler = (cat) => {
    setLiActive(cat);
    navfunc(`/blog/${cat}`);
  };
  useEffect(() => {
    axios
      .get(`https://blogapi-for-stoic3017.herokuapp.com/blogs/${category}`)
      .then((r) => setsitedata(r.data));
  }, [liActive]);
  return (
    <>
      <div className={styles.main_container}>
        <br />
        <Navbar />
        <br />

        <ul className={styles.list_Container}>
          <li
            className={`${styles.list_element} ${
              liActive === "blogs" ? styles.activetab : ""
            }`}
            onClick={() => focouse_controler("blogs")}
          >
            blog
          </li>
          <li
            className={`${styles.list_element} ${
              liActive === "productivity" ? styles.activetab : ""
            }`}
            onClick={() => focouse_controler("productivity")}
          >
            productivity
          </li>
          <li className={styles.list_element}>remote work</li>
          <li
            className={`${styles.list_element} ${
              liActive === "best_practicess" ? styles.activetab : ""
            }`}
            onClick={() => focouse_controler("best_practicess")}
          >
            best practices
          </li>
          <li className={styles.list_element}>resources</li>
        </ul>

        <Blogcat category={sitedata} />
      </div>
    </>
  );
};
