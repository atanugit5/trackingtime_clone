import React, { useEffect, useState } from "react";
import style from "./inte.module.css";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

export const Integration = () => {
  const { id } = useParams();
  console.log("id", id);
  const [data, setData] = useState([]);

  const getData = async (id) => {
    let res = await fetch(
      `https://boiling-bayou-95689.herokuapp.com/integrations/id/${id}`
    );
    let data = await res.json();
    console.log("DATA", data);
    setData(data);
  };

  useEffect(() => {
    getData(id);
    window.scrollTo(0,0)
  }, [id]);


  return (
    <>
      <br />
      <Navbar />
      <br />
      {data.map((el)=>(<div>
        <video loop muted autoPlay style={{ width: "100%" }}>
        <source
          src={el.video}
          type="video/mp4"
        />
      </video>
      <div className={style.parent}>
        <div className={style.mainDiv}>
          <div className={style.logoDiv}>
            <img
              src={data[0]?.logo}
              alt=""
              className={style.logo}
            />
          </div>
          <h1 className={style.head1}>{el.h1}</h1>
          <a
            href="https://pro.trackingtime.co/#signup"
            target="_blank"
            className={style.aTag}
          >
            <p className={style.installAt}>INSTALL</p>
          </a>
          <div className={style.para}>
            <h3 className={style.para1}>{el.h2}<span style={{fontSize:"2rem",fontWeight:600}}>{el.title}</span></h3>
            <p className={style.para2}>
              {el.h3}
            </p>
            <p className={style.para3}>
            {el.h4}
            </p>
          </div>
          <h4 className={style.aboutAt}>{el.about}</h4>
          <a
            href={el.visit_link}
            target="_blank"
            className={style.aTag}
          >
            <p className={style.visitAt}>VISIT {el.title}</p>
          </a>
          <p className={style.descrip}>
            <span>
              {el.dsc}
            </span>
            <a href={el.visit_link} target={"_blank"}>
              <span style={{ color: "black" }}>Read More</span>
            </a>
          </p>
          <h3 className={style.qus}>
            {el.Q1}
          </h3>
          <div className={style.ans}>
            {el.A1}
          </div>
          <h3 className={style.qus}>
          {el.Q2}
          </h3>
          <div className={style.ans}>
          {el.A2}
          </div>
          <h3 className={style.qus}>
          {el.Q3}
          </h3>
          <div className={style.ans}>
          {el.A3}
          </div>
          <h3 className={style.qus}>
          {el.Q4}
          </h3>
          <div className={style.ans}>
          {el.A4}
          </div>
        </div>
        </div>
      </div>
      ))}
      <Footer/>
    </>
  );
};
