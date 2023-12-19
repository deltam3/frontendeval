import React from "react";
import { useState } from "react";
import "./Timer.css";

function Timer({
  isActive,
  setIsActive,
  hourValue,
  minValue,
  secValue,
  setHourValue,
  setMinValue,
  setSecValue,
}) {
  const handleHourChange = (e) => {
    setHourValue(e.target.value);
  };

  const handleMinChange = (e) => {
    setMinValue(e.target.value);
  };

  const handleSecChange = (e) => {
    setSecValue(e.target.value);
  };

  return (
    <section className="section-timer">
      <form className="form">
        <div>
          <input
            type="number"
            value={hourValue}
            className="hour-number"
            placeholder="HH"
            onChange={(e) => handleHourChange(e)}
          ></input>
        </div>
        <div>
          <input
            type="number"
            value={minValue}
            className="hour-number"
            placeholder="MM"
            onChange={(e) => handleMinChange(e)}
          ></input>
        </div>
        <div>
          <input
            type="number"
            value={secValue}
            className="hour-number"
            placeholder="SS"
            onChange={(e) => handleSecChange(e)}
          ></input>
        </div>
        <div>
          {isActive ? (
            <div>
              <button
                className="btn btn--pause"
                onClick={() => setIsActive(!isActive)}
              >
                Pause
              </button>
              <button className="btn btn--reset">Reset</button>
            </div>
          ) : (
            <button
              className="btn btn--start"
              onClick={() => setIsActive(true)}
            >
              Start
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default Timer;
