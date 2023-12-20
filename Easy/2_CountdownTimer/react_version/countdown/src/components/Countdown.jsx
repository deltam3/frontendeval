import React from "react";
import "./Countdown.css";

function Countdown({
  isActive,
  setIsActive,
  hourValue,
  minValue,
  secValue,
  setHourValue,
  setMinValue,
  setSecValue,
}) {
  return (
    <section className="section-countdown">
      <div className="countdown">
        <div className="">
          <p>{hourValue}</p>
        </div>
        <div>
          <p>{minValue}</p>
        </div>
        <div>
          <p>{secValue}</p>
        </div>
      </div>
      <div>
        <button
          className="btn btn--pause"
          onClick={() => setIsActive(!isActive)}
        >
          Pause
        </button>
        <button className="btn btn--reset">Reset</button>
      </div>
    </section>
  );
}

export default Countdown;
