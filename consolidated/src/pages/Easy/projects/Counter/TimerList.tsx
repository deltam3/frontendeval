import Timer from "./Timer";

function TimerList({ timers, setTimers }) {
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
