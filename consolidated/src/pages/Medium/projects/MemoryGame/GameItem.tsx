import React from "react";
import "./GameItem.css";
import { GameItemType } from "./Game";

type Props = {
  item: GameItemType;
  items: Array<GameItemType>;
  setItems: () => void;
  revealedCardCount: number;
  cardItemOne: any;
  cardItemTwo: any;
};

const GameItem = ({
  item,
  items,
  setItems,
  revealedCardCount,
  cardItemOne,
  cardItemTwo,
}: Props) => {
  const thisId = item.id;

  const handleClick = () => {
    if (revealedCardCount.current === 0) {
      const result = items.map((item) => {
        if (item.id === thisId) {
          cardItemOne.current = item;
          return { ...item, revealed: true };
        }
        return item;
      });
      revealedCardCount.current = 1;
      setItems(result);
    } else if (revealedCardCount.current === 1) {
      if (cardItemTwo.current === undefined) {
        const result = items.map((item) => {
          if (item.id === thisId) {
            cardItemTwo.current = item;
            return { ...item, revealed: true };
          }
          return item;
        });
        revealedCardCount.current = 2;
        setItems(result);
      }
      if (cardItemTwo.current !== undefined) {
        return;
      }
    }
  };

  const classes = item?.revealed
    ? "card-item card-revealed-true"
    : "card-item card-revealed-false";
  const pairedClasses = item?.paired ? "card-paired-true" : "";

  return (
    <div onClick={handleClick} className={classes + " " + pairedClasses}>
      <div>
        <h1>{item.number}</h1>
      </div>
    </div>
  );
};

export default GameItem;
