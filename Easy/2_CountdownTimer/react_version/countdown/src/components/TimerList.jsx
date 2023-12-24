import Timer from "./Timer";
import "./TimerList.css";

function TimerList({ timers }) {
  return (
    <ul>
      {timers.map((timer) => {
        return <Timer key={timer.id} timer={timer}></Timer>;
      })}
    </ul>
  );
}

export default TimerList;
