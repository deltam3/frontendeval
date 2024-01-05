import { useState, useEffect } from "react";

import "./GameItem.css";

function GameItem({
  item,
  items,
  setItems,
  numberRevealed,
  cardItemOne,
  cardItemTwo,
}) {
  const thisId = item.id;
  // const isPaired = item.paired;

  const handleClick = () => {
    if (numberRevealed.current === 1) {
    } else if (numberRevealed.current === 0) {
    }
  };

  const classes = item.revealed
    ? "card-item card-revealed-true"
    : "card-item card-revealed-false";

  const pairedClasses = item.paired ? "card-paired-true" : "";

  return (
    <div onClick={handleClick} className={classes + pairedClasses}>
      <div>
        <h1>{item.number}</h1>
      </div>
    </div>
  );
}

export default GameItem;

// useEffect(() => {
//   if (numberRevealed.current === 2) {
//     if (cardItemOne.current.number === cardItemTwo.current.number) {
//       const result = items.map((item) => {
//         if (cardItemOne.current.id === item.id) {
//           item.classList.add("visibility-none");
//           return { ...item, paired: true };
//         }
//         if (cardItemTwo.current.id === item.id) {
//           item.classList.add("visibility-none");
//           return { ...item, paired: true };
//         }
//       });
//       setItems(result);
//       numberRevealed.current = 0;
//     }

//     if (cardItemOne.current.number !== cardItemTwo.current.number) {
//       const result = items.map((item) => {
//         return { ...item, revealed: !item.revealed };
//       });
//       setItems(result);
//       numberRevealed.current = 0;
//     }
//   }
// }, [numberRevealed.current]);
