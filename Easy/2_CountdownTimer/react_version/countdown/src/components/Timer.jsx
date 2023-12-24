import React from "react";
import { useState, useEffect } from "react";
import "./Timer.css";

import BeforeStart from "./BeforeStart";
import AfterStart from "./AfterStart";

function Timer({ timer, setTimers }) {
  const [isActive, setIsActive] = useState(false);

  const handleActive = (e) => {
    e.preventDefault();

    setIsActive((isActive) => setIsActive(!isActive));
  };

  return (
    <li className="timer-item">
      {isActive ? (
        <AfterStart></AfterStart>
      ) : (
        <BeforeStart
          setTimers={setTimers}
          handleActive={handleActive}
        ></BeforeStart>
      )}
    </li>
  );
}

export default Timer;
