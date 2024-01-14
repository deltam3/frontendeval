import { useImmer } from "use-immer";
import { useState, useRef } from "react";
// import TimerList from "./components/TimerList.tsx";

const initialTimers = [{ id: 1 }, { id: 2 }];

function App() {
  const [timer, setTimers] = useState(initialTimers);
  // const currentId = useRef(2);

  return (
    <main>
      <section>
        <h1>Countdown Timer</h1>
        {/* <TimerList timers={timers} setTimers={setTimers}></TimerList> */}
        {/* <button onClick={handleAddClick}>Add Timer</button> */}
      </section>
    </main>
  );
}

export default App;
