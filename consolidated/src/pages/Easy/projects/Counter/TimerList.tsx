import { timerType } from "./CounterPage";
import Timer from "./Timer";

type PropsType = {
  timers: Array<timerType>;
  setTimers: () => void;
};

function TimerList({ timers, setTimers }: PropsType) {
  return (
    <ul className="flex flex-col gap-6">
      {timers.map((timer) => {
        return (
          <Timer
            key={timer.id}
            id={timer.id}
            timers={timers}
            setTimers={setTimers}
          ></Timer>
        );
      })}
    </ul>
  );
}

export default TimerList;
