import { useState } from "react";

import className from "classnames";
import "./GameItem.css";

function GameItem({ item, items, setItems }) {
  const thisId = item.id;

  const handleClick = () => {
    const result = items.map((item) => {
      if (item.id === thisId) {
        return { ...item, revealed: !item.revealed };
      }
      return item;
    });
    setItems(result);
  };

  const classes = item.revealed
    ? "card-item card-revealed-true"
    : "card-item card-revealed-false";

  return (
    <div onClick={handleClick} className={classes}>
      <div>
        <h1>{item.number}</h1>
      </div>
    </div>
  );
}

export default GameItem;
