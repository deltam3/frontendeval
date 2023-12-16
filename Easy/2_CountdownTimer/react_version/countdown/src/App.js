import "./App.css";
import { useState } from "react";
import Timer from "./components/Timer";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <h1 className="heading-primary center-text">Countdown Timer</h1>
      <Timer isActive={isActive} setIsActive={setIsActive}></Timer>
    </div>
  );
}

export default App;
