import { useEffect } from "react";
import Button from "./Button";

import "./AfterStart.css";
import "./Button.css";

function AfterStart({ timer, handleReset }) {
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
        <Button primary onClick={(e) => handleReset(e)}>
          Reset
        </Button>
      </div>
    </section>
  );
}

export default AfterStart;
