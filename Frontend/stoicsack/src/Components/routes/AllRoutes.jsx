import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
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
      </Routes>
    </>
  );
};
