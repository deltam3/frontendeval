import React from "react";
import "./BeforeStart.css";

import Button from "./Button";

function BeforeStart({ setTimers, handleActive }) {
  const handleClick = (e) => {
    handleActive(e);
  };

  return (
    <form className="form-timer" onSubmit={(e) => handleActive(e)}>
      <div>
        <input type="number" placeholder="HH"></input>
      </div>
      <div>
        <p>:</p>
      </div>
      <div>
        <input type="number" placeholder="MM"></input>
      </div>
      <div>
        <p>:</p>
      </div>
      <div>
        <input type="number" placeholder="SS"></input>
      </div>
      <Button primary onClick={handleClick}>
        Start
      </Button>
    </form>
  );
}

export default BeforeStart;
