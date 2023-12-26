import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Timer.css";

import BeforeStart from "./BeforeStart";
import AfterStart from "./AfterStart";

function Timer({ id, timers, setTimers }) {
  const timerId = id;
  const [timer, setTimer] = useState({
    id: timerId,
    hour: "HH",
    min: "MM",
    sec: "SS",
    isActive: false,
  });
  const timeSet = useRef(timer);

  const handleActive = () => {
    if (timer.isActive === false) {
      timeSet.current = timer;
      setTimer((timer) => ({ ...timer, isActive: !timer.isActive }));
    } else {
      setTimer((timer) => ({
        ...timer,
        hour: timeSet.current.hour,
        min: timeSet.current.min,
        sec: timeSet.current.sec,
      }));
      setTimer((timer) => ({ ...timer, isActive: !timer.isActive }));
      return;
    }
  };

  const handleDelete = () => {
    const newTimers = timers.filter((timer) => {
      return timerId !== timer.id;
    });
    setTimers(newTimers);
  };

  return (
    <li className="timer-item">
      {timer.isActive ? (
        <AfterStart
          timer={timer}
          setTimer={setTimer}
          handleActive={handleActive}
        ></AfterStart>
      ) : (
        <BeforeStart
          timerId={timer.id}
          timer={timer}
          setTimer={setTimer}
          handleActive={handleActive}
        ></BeforeStart>
      )}
      <div>
        <button onClick={() => handleDelete()}>Delete</button>
      </div>
    </li>
  );
}

export default Timer;
