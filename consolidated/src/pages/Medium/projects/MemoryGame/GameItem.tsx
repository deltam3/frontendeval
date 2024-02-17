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



  return <div>GameItem</div>;
};

export default GameItem;
