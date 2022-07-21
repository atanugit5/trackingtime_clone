import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Blog.module.css";
import { Blogcat } from "./Blogcat";
import { useParams } from "react-router-dom";
// import { Blogcat } from "./Blogcat";

export const Blog = () => {
  const { category } = useParams();
  console.log(`🚀 ~ Blog ~ getparams`, category);
  const [liActive1, setLiActive1] = useState(true);
  const [liActive2, setLiActive2] = useState(false);
  const [liActive3, setLiActive3] = useState(false);
  const [sitedata, setsitedata] = useState([]);

  const focouse_controler1 = () => {
    setLiActive1(true);
    setLiActive2(false);
    setLiActive3(false);
    // setsitedata()
    axios
      .get(`https://blogapi-for-stoic3017.herokuapp.com/blogs/${category}`)
      .then((r) => setsitedata(r.data));
  };

  const focouse_controler2 = () => {
    setLiActive1(false);
    setLiActive2(true);
    setLiActive3(false);
    axios
      .get(`https://blogapi-for-stoic3017.herokuapp.com/blogs/${category}`)
      .then((r) => setsitedata(r.data));
  };
  const focouse_controler3 = () => {
    setLiActive1(false);
    setLiActive2(false);
    setLiActive3(true);
    axios
      .get(`https://blogapi-for-stoic3017.herokuapp.com/blogs/${category}`)
      .then((r) => setsitedata(r.data));
  };

  useEffect(() => {
    axios
      .get(`https://blogapi-for-stoic3017.herokuapp.com/blogs/${category}`)
      .then((r) => setsitedata(r.data));
  }, [liActive1, liActive2, liActive3]);

  return (
    <div className={styles.main_container}>
      <ul className={styles.list_Container}>
        <li
          className={`${styles.list_element} ${
            liActive1 ? styles.activetab : ""
          }`}
          onClick={focouse_controler1}
        >
          blog
        </li>
        <li
          className={`${styles.list_element} ${
            liActive2 ? styles.activetab : ""
          }`}
          onClick={focouse_controler2}
        >
          productivity
        </li>
        <li className={styles.list_element}>remote work</li>
        <li
          className={`${styles.list_element} ${
            liActive3 ? styles.activetab : ""
          }`}
          onClick={focouse_controler3}
        >
          best practices
        </li>
        <li className={styles.list_element}>resources</li>
      </ul>
      <Blogcat category={sitedata} />
    </div>
  );
};
