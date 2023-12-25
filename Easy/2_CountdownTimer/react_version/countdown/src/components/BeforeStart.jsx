import React from "react";
import "./BeforeStart.css";

import Button from "./Button";

function BeforeStart({ timer, setTimer, handleActive }) {
  const handleClick = (e) => {
    handleActive(e);
  };

  const handleHourChange = (e) => {
    setTimer((timer) => {
      return { ...timer, hour: +e.target.value };
    });
  };

  const handleMinChange = (e) => {
    setTimer((timer) => {
      return { ...timer, min: +e.target.value };
    });
  };

  const handleSecChange = (e) => {
    setTimer((timer) => {
      return { ...timer, sec: +e.target.value };
    });
  };

  return (
    <form className="form-timer" onSubmit={(e) => handleActive(e)}>
      <div>
        <input
          type="number"
          placeholder="HH"
          value={timer.hour}
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
          value={timer.min}
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
          value={timer.sec}
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
