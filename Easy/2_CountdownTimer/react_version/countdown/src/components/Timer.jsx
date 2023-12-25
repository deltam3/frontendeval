import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Timer.css";

import BeforeStart from "./BeforeStart";
import AfterStart from "./AfterStart";

function Timer({ timer, timers, setTimers }) {
  const [isActive, setIsActive] = useState(false);
  const timeSet = useRef(timer);

  const handleActive = (e) => {
    e.preventDefault();
    timeSet.current = timer;
    setIsActive((isActive) => setIsActive(!isActive));
  };

  return (
    <li className="timer-item">
      {isActive ? (
        <AfterStart timer={timer} handleActive={handleActive}></AfterStart>
      ) : (
        <BeforeStart
          timerId={timer.id}
          timers={timers}
          timer={timer}
          setTimers={setTimers}
          handleActive={handleActive}
        ></BeforeStart>
      )}
    </li>
  );
}

export default Timer;
