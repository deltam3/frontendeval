import React, { useState, useRef } from "react";
import Button from "../../../../components/Button";
import TimerList from "./TimerList";

export type timerType = {
  id: number;
};

const initialTimers = [{ id: 1 }, { id: 2 }];

function CounterPage() {
  const [timers, setTimers] = useState<Array<timerType>>(initialTimers);
  const currentId = useRef(2);
  const handleAddClick = () => {
    const result = [...timers, { id: currentId.current + 1 }];
    setTimers(result);
  };

  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-center flex-col w-3/12 mx-auto gap-2">
        <h2 className="font-bold text-3xl text-center">Countdown Timer</h2>
        <Button success onClick={handleAddClick}>
          Add Timer
        </Button>
      </div>
      <div className="flex justify-center">
        <TimerList timers={timers} setTimers={setTimers}></TimerList>
      </div>
    </section>
  );
}

export default CounterPage;
