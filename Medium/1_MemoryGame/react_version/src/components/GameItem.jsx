import { useState } from "react";

import className from "classnames";
import "./GameItem.css";

function GameItem({ item }) {
  const [cardRevealed, setCardRevealed] = useState(false);

  const handleClick = () => {
    setCardRevealed((cardRevealed) => !cardRevealed);
  };

  const classes = cardRevealed
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
