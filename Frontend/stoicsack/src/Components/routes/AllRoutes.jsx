import React from "react";
import { Routes, Route } from "react-router-dom";
import { Blog } from "../Blogs/Blog";
import Home from "../Home/Home";
import { Integration } from "../Integrations/Integration";
import { Integrations } from "../Integrations/Integrations";
import { Login } from "../Login/Login";
import Managament from "../Managament/Managament";
import Timecards from "../TimeCards/Timecards";
export const AllRoutes = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-management" element={<Managament />} />
        <Route path="/time-cards" element={<Timecards/>}/>
        <Route path="/integrations" element={<Integrations/>}/>
        <Route path="/integrations/:id" element={<Integration/>}/>
        <Route path="/blog/:category" element={<Blog/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
};
