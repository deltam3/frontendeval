import "./App.css";
import { useState, useEffect } from "react";
import TimerList from "./components/TimerList.jsx";

const initialTimer = [
  { id: 1, hour: "HH", min: "MM", sec: "SS", isActive: false },
  { id: 2, hour: "HH", min: "MM", sec: "SS", isActive: false },
];

function App() {
  const [timers, setTimers] = useState(initialTimer);
  return (
    <main className="main">
      <section className="section-timer">
        <h1 className="heading-primary center-text">Countdown Timer</h1>
        <TimerList timers={timers} setTimers={setTimers}></TimerList>
      </section>
    </main>
  );
}

export default App;
