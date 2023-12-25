import { useState, useEffect } from "react";
import Button from "./Button";

import "./AfterStart.css";
import "./Button.css";

function AfterStart({ timer, setTimer, handleActive }) {
  let timerId = timer.id;

  useEffect(() => {
    let countdown = setInterval(() => {
      // sec이 0이 아닐때
      if (timer.sec !== 0) {
        setTimer((timer) => {
          return { ...timer, sec: timer.sec - 1 };
        });
      }

      // sec이 0일때
      if (timer.sec === 0) {
        // min이 0 일때
        if (timer.min === 0) {
          // hour이 0이 아니면 줄이고
          if (timer.hour !== 0) {
            setTimer((timer) => {
              return { ...timer, hour: timer.hour - 1, min: 59, sec: 59 };
            });
          }
          // Hour이 1이면 59분
          if (timer.hour === 1) {
            setTimer((timer) => {
              return { ...timer, hour: 0, min: 59, sec: 59 };
            });
          }
        }
        // min이 0이 아닐때
        if (timer.min !== 0) {
          setTimer((timer) => {
            return { ...timer, min: timer.min - 1, sec: 59 };
          });
        }
        // turn the timer off when the timer is finished
        if (timer.hour === 0 && timer.min === 0) {
          handleActive();
        }
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
        <Button primary onClick={() => handleActive()}>
          Reset
        </Button>
      </div>
    </section>
  );
}

export default AfterStart;
