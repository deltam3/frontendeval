import { useState } from "react";

import "./GameItem.css";

function GameItem({ item }) {
  const [cardRevealed, setCardRevealed] = useState(false);

  return (
    <div className="card-item">
      <div>
        <h1>{item.number}</h1>
      </div>
    </div>
  );
}

export default GameItem;
