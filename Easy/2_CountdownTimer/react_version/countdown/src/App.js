import "./App.css";
import { useState } from "react";
import Timer from "./components/Timer";
import Countdown from "./components/Countdown";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [hourValue, setHourValue] = useState("HH");
  const [minValue, setMinValue] = useState("MM");
  const [secValue, setSecValue] = useState("SS");

  return (
    <div>
      <h1 className="heading-primary center-text">Countdown Timer</h1>
      {isActive ? (
        <Countdown
          isActive={isActive}
          setIsActive={setIsActive}
          hourValue={hourValue}
          minValue={minValue}
          secValue={secValue}
          setHourValue={setHourValue}
          setMinValue={setMinValue}
          setSecValue={setSecValue}
        ></Countdown>
      ) : (
        <Timer
          isActive={isActive}
          setIsActive={setIsActive}
          hourValue={hourValue}
          minValue={minValue}
          secValue={secValue}
          setHourValue={setHourValue}
          setMinValue={setMinValue}
          setSecValue={setSecValue}
        ></Timer>
      )}
    </div>
  );
}

export default App;
