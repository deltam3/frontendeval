import React from "react";
import "./Countdown.css";

import { useEffect, useRef, useState } from "react";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes <= 10) minutes = "0" + minutes;
  if (seconds <= 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

function Countdown({
  seconds,
  isActive,
  setIsActive,
  hourValue,
  minValue,
  secValue,
  setHourValue,
  setMinValue,
  setSecValue,
}) {
  const [countdown, setCountdown] = useState(seconds);
  const timerId = useRef();
  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      alert("end");
    }
  }, [countdown]);

  return (
    <section className="section-countdown">
      <div className="countdown">
        <p>남은 시간: {formatTime(countdown)}</p>
      </div>
      <div>
        <button className="btn btn--pause">Pause</button>
        <button
          className="btn btn--reset"
          onClick={() => setIsActive(!isActive)}
        >
          Reset
        </button>
      </div>
    </section>
  );
}

export default Countdown;
