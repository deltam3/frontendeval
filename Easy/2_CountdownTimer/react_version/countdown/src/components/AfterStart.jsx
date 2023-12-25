import { useState, useEffect } from "react";
import Button from "./Button";

import "./AfterStart.css";
import "./Button.css";

function AfterStart({ timer, setTimer, handleActive }) {
  let timerId = timer.id;

  useEffect(() => {
    let countdown = setInterval(() => {
      if (timer.sec !== 0) {
        setTimer((timer) => {
          return { ...timer, sec: timer.sec - 1 };
        });
      }
      if (timer.sec === 0) {
        setTimer((timer) => {
          return { ...timer, sec: 59 };
        });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer]);

  return (
    <section className="section-afterstart">
      <div className="afterstart-times">
        <div>{timer.hour}</div>
        <span>:</span>
        <div>{timer.min < 10 ? "0" + timer.min : timer.min}</div>
        <span>:</span>
        <div>{timer.sec < 10 ? "0" + timer.sec : timer.sec}</div>
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
