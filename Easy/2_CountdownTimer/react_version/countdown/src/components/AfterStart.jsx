import React from "react";
import Button from "./Button";

import "./AfterStart.css";
import "./Button.css";

function AfterStart({ timer, handleActive }) {
  return (
    <section className="section-afterstart">
      <div className="afterstart-times">
        <div>{timer.hour}</div>
        <span>:</span>
        <div>{timer.min}</div>
        <span>:</span>
        <div>{timer.sec}</div>
      </div>
      <div>
        <Button primary>Pause</Button>
        <Button primary onClick={(e) => handleActive(e)}>
          Reset
        </Button>
      </div>
    </section>
  );
}

export default AfterStart;
