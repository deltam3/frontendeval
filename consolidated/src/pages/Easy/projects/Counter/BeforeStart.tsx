import React from "react";

import Button from "../../../../components/Button";

function BeforeStart({ timer, setTimer, handleActive, handleDelete }) {
  const handleClick = (e) => {
    if (
      typeof timer.hour === "number" &&
      typeof timer.min === "number" &&
      typeof timer.sec === "number"
    ) {
      handleActive();
    }
  };

  const handleHourChange = (e) => {
    setTimer((timer) => {
      return { ...timer, hour: +e.target.value };
    });
  };

  const handleMinChange = (e) => {
    setTimer((timer) => {
      return { ...timer, min: +e.target.value };
    });
  };

  const handleSecChange = (e) => {
    setTimer((timer) => {
      return { ...timer, sec: +e.target.value };
    });
  };

  const handleDeleteBtn = (timer) => {
    handleDelete(timer.id);
  };

  return (
    <>
      <form className="flex">
        <div>
          <input
            type="number"
            placeholder="HH"
            value={timer.hour}
            onChange={(e) => handleHourChange(e)}
          ></input>
        </div>
        <div>
          <p>:</p>
        </div>
        <div>
          <input
            type="number"
            placeholder="MM"
            value={timer.min}
            onChange={(e) => handleMinChange(e)}
          ></input>
        </div>
        <div>
          <p>:</p>
        </div>
        <div>
          <input
            type="number"
            placeholder="SS"
            value={timer.sec}
            onChange={(e) => handleSecChange(e)}
          ></input>
        </div>
      </form>
      <div className="flex justify-center">
        <Button primary onClick={handleClick}>
          Start
        </Button>
        <Button danger onClick={() => handleDeleteBtn(timer)}>
          Delete
        </Button>
      </div>
    </>
  );
}

export default BeforeStart;
