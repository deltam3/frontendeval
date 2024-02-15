import React, { useState, useRef } from "react";
import Button from "../../../../components/Button";
import TimerList from "./TimerList";

// type Props = {};
export type timerType = {
  id: 1;
};

// export type

const initialTimers = [{ id: 1 }, { id: 2 }];

function CounterPage({}: Props) {
  const [timers, setTimers] = useState(initialTimers);
  const currentId = useRef(2);
  const handleAddClick = () => {
    const result = [...timers, { id: currentId.current + 1 }];
    setTimers(result);
  };

  return (
    <>
      <div className="flex justify-center flex-col w-3/12 mx-auto">
        <h2 className="font-bold text-3xl text-center">Countdown Timer</h2>
        <Button success onClick={handleAddClick}>
          Add Timer
        </Button>
      </div>
      <div className="flex justify-center">
        <TimerList timers={timers} setTimers={setTimers}></TimerList>
      </div>
    </>
  );
}

export default CounterPage;
