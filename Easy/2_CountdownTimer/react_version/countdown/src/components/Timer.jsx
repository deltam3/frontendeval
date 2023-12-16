import React from "react";
import { useState } from "react";
import "./Timer.css";

function Timer({ isActive, setIsActive }) {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <section className="section-timer">
      <form className="form">
        <div>
          <input type="number" className="hour-number" placeholder="HH"></input>
        </div>
        <div>
          <input type="number" className="hour-number" placeholder="MM"></input>
        </div>
        <div>
          <input type="number" className="hour-number" placeholder="SS"></input>
        </div>
        <div>
          {isActive ? (
            <div>
              <button
                className="btn btn--pause"
                onClick={() => setIsPaused(!isPaused)}
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
