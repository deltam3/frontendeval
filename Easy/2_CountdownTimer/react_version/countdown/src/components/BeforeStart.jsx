import React from "react";
import "./BeforeStart.css";

import Button from "./Button";

function BeforeStart({ timerId, timers, setTimers, handleActive }) {
  const handleClick = (e) => {
    handleActive(e);
  };

  const handleHourChange = (e) => {
    const newTimers = timers.map((timer) => {
      if (timer.id === timerId) {
        return { ...timer, hour: e.target.value };
      }
      return timer;
    });
    setTimers(newTimers);
  };

  const handleMinChange = (e) => {
    const newTimers = timers.map((timer) => {
      if (timer.id === timerId) {
        return { ...timer, min: e.target.value };
      }
      return timer;
    });
    setTimers(newTimers);
  };

  const handleSecChange = (e) => {
    const newTimers = timers.map((timer) => {
      if (timer.id === timerId) {
        return { ...timer, sec: e.target.value };
      }
      return timer;
    });
    setTimers(newTimers);
  };

  return (
    <form className="form-timer" onSubmit={(e) => handleActive(e)}>
      <div>
        <input
          type="number"
          placeholder="HH"
          onChange={(e) => handleHourChange(e)}
        ></input>
      </div>
      <div>
        <p>:</p>
      </div>
      <div>
        <input
          type="number"
          placeholder="MM"
          onChange={(e) => handleMinChange(e)}
        ></input>
      </div>
      <div>
        <p>:</p>
      </div>
      <div>
        <input
          type="number"
          placeholder="SS"
          onChange={(e) => handleSecChange(e)}
        ></input>
      </div>
      <Button primary onClick={handleClick}>
        Start
      </Button>
    </form>
  );
}

export default BeforeStart;
