import React from "react";
import Button from "../../../../components/Button";

type Props = {};

function CounterPage({}: Props) {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Countdown Timer</h2>
      <Button primary> click</Button>
    </div>
  );
}

export default CounterPage;
