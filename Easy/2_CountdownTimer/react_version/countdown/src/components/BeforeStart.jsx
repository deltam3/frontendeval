import React from "react";
import "./BeforeStart.css";

function BeforeStart({ setTimers, handleActive }) {
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
      <button className="btn btn-start">Start</button>
    </form>
  );
}

export default BeforeStart;
