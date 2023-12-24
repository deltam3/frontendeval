import React from "react";

function AfterStart({ timer }) {
  return (
    <section>
      <div>{timer.hour}</div>
      <div>{timer.min}</div>
      <div>{timer.sec}</div>
    </section>
  );
}

export default AfterStart;
