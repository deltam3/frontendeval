import { useState, useEffect, useCallback } from "react";

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
  const stableHandleClick = useCallback(setItems, [setItems]);
  // const fetchBooks = async () => {
  //   const response = await axios.get('http://localhost:3001/books');
  //   setBooks(response.data)
  // }

  // const stableFetchBook = useCallback(fetchBooks, [])

  const handleClick = () => {
    //
    if (
      cardItemOne.current?.id === undefined &&
      thisId !== cardItemOne.current?.id
    ) {
      console.log("one");
      const result = items.map((item) => {
        if (item.id === thisId) {
          cardItemOne.current = item;
          return { ...item, revealed: true };
        }
        return item;
      });
      setItems(result);
    } else if (
      cardItemOne.current?.id !== undefined &&
      cardItemTwo.current?.id === undefined &&
      thisId !== cardItemTwo.current?.id
    ) {
      console.log("two");

      for (let i = 0; i < items.length; i++) {
        if (item.id === thisId) {
          cardItemTwo.current = item;
        }
      }

      // when card1 and card2 numbers are the same
      if (
        cardItemOne.current?.number !== undefined &&
        cardItemTwo.current?.number !== undefined &&
        cardItemOne.current?.number === cardItemTwo.current?.number
      ) {
        console.log("2-1: same cards");
        const result = items.map((item) => {
          if (
            item.id === cardItemOne.current?.id ||
            item.id === cardItemTwo.current?.id
          ) {
            return { ...item, revealed: false, paired: true };
          }
          return item;
        });
        cardItemOne.current = null;
        cardItemTwo.current = null;
        setItems(result);
      }
      // when card1 and card2 numbers are not the same
      if (
        cardItemOne.current?.number !== undefined &&
        cardItemTwo.current?.number !== undefined &&
        cardItemOne.current?.number !== cardItemTwo.current?.number
      ) {
        console.log("2-2: not the same");
        const result = items.map((item) => {
          if (
            item.id === cardItemOne.current?.id ||
            item.id === cardItemTwo.current?.id
          ) {
            return { ...item, revealed: false };
          }
          return item;
        });
        cardItemOne.current = null;
        cardItemTwo.current = null;
        setItems(result);
      }

      // setItems(result);
    }
  };

  const classes = item.revealed
    ? "card-item card-revealed-true"
    : "card-item card-revealed-false";

  const pairedClasses = item.paired ? "card-paired-true" : "";

  return (
    <div onClick={handleClick} className={classes + " " + pairedClasses}>
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

// useEffect(() => {
//   if (
//     cardItemOne.current !== undefined &&
//     cardItemTwo.current !== undefined &&
//     cardItemOne.current?.number === cardItemTwo.current?.number
//   ) {
//     const result = items.map((item) => {
//       if (
//         item.id === cardItemOne.current?.id ||
//         item.id === cardItemTwo.current?.id
//       ) {
//         return { ...item, revealed: false, paired: true };
//       }
//       return item;
//     });
//     cardItemOne.current = null;
//     cardItemTwo.current = null;
//     stableHandleClick(result);
//   }
//   if (
//     cardItemOne.current !== undefined &&
//     cardItemTwo.current !== undefined &&
//     cardItemOne.current?.number !== cardItemTwo.current?.number
//   ) {
//     const result = items.map((item) => {
//       if (
//         item.id === cardItemOne.current?.id ||
//         item.id === cardItemTwo.current?.id
//       ) {
//         return { ...item, revealed: false };
//       }
//       return item;
//     });
//     cardItemOne.current = null;
//     cardItemTwo.current = null;
//     stableHandleClick(result);
//   }
// }, [items, cardItemOne, cardItemTwo, stableHandleClick]);
