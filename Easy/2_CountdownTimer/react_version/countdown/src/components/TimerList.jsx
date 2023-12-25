import Timer from "./Timer";
import "./TimerList.css";

function TimerList({ timers, setTimers }) {
  return (
    <ul>
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
