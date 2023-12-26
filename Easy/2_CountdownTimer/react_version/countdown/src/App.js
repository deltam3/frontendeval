import "./App.css";
import { useState, useRef } from "react";
import TimerList from "./components/TimerList.jsx";

const initialTimers = [{ id: 1 }, { id: 2 }];

function App() {
  const [timers, setTimers] = useState(initialTimers);
  const currentId = useRef(2);
  const handleAddClick = () => {
    const result = [...timers, { id: currentId.current + 1 }];
    setTimers(result);
  };

  return (
    <main className="main">
      <section className="section-timer">
        <h1 className="heading-primary center-text">Countdown Timer</h1>
        <TimerList timers={timers} setTimers={setTimers}></TimerList>
        <button onClick={handleAddClick}>Add Timer</button>
      </section>
    </main>
  );
}

export default App;
