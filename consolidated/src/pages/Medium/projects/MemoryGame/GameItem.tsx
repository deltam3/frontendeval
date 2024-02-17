import React from "react";
import "./GameItem.css"

type Props = {
  item:
};

const GameItem = ({
  item,
  items,
  setItems,
  revealedCardCount,
  cardItemOne,
  cardItemTwo,
}: Props) => {
  const thisId  = item.id;

  const handleClick = () => {
    if (revealedCardCount.current === 0) {
      const result = items.map((item) => {
        if (item.id === thisId) {
          cardItemOne.current = item;
          return {...item, revealed: true}
        }
        return item
      })
      revealedCardCount.current = 1;
      setItems(result)
    } else if (revealedCardCount.current === 1 {
      if (cardItemTwo.current === undefined) {
        const result = items.map((item) => {
          if (item.id === thisId) {
            cardItemTwo.current = item;
            return {...item, revealed: true}
          }
          return item 
        })
      }
    })
  }

  return <div>GameItem</div>;
};

export default GameItem;
