import React from "react";
import { Routes, Route } from "react-router-dom";
import { Blogcat } from "../Blogs/Blogcat";
import Home from "../Home/Home";
import { Integrations } from "../Integrations/Integrations";
import { Login } from "../Login/Login";
import Managament from "../Managament/Managament";
import Timecards from "../TimeCards/Timecards";
export const AllRoutes = () => {
  return (
    <>
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-management" element={<Managament />} />
        <Route path="/time-cards" element={<Timecards/>}/>
        <Route path="/integrations" element={<Integrations/>}/>
        <Route path="/blog/:category" element={<Blogcat/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
};
