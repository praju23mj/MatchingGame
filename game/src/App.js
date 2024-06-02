import React from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import Intro from "./Components/Intro/Intro";
import Question from "./Components/Question/Question";

import Instruction from "./Components/instruction/Instruction";
import Activity from "./Components/Acitvity/Activity";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="wrapper">
            <LandingPage />
          </div>
        }
      />
      <Route
        path="/intro"
        element={
          <div className="wrapper">
            <Intro/>
          </div>
        }
      />
      <Route
        path="/question"
        element={
          <div className="wrapper">
            <Question/>
          </div>
        }
      />
      <Route
        path="/instruction"
        element={
          <div className="wrapper">
            <Instruction/>
          </div>
        }
      />{" "}
      <Route
        path="/activity"
        element={
          <div className="wrapper">
            <Activity/>
          </div>
        }
      />
    </Routes>
  );
};

export default App;