import React, { useState, useRef } from "react";
import Button from "../../../../components/Button";

type Props = {};

const initialTimers = [{ id: 1 }, { id: 2 }];

function CounterPage({}: Props) {
  const [timers, setTimers] = useState(initialTimers);
  const currentId = useRef(2);
  const handleAddClick = () => {
    const result = [...timers, { id: currentId.current + 1 }];
    setTimers(result);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Countdown Timer</h2>
      <TimerList timers={timers} setTimers={setTimers}></TimerList>
      <Button onClick={handleAddClick}>Add Timer</Button>
    </div>
  );
}

export default CounterPage;
