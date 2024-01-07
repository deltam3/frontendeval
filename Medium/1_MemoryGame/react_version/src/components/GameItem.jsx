import "./GameItem.css";

function GameItem({
  item,
  items,
  setItems,
  revealedCardsCount,
  cardItemOne,
  cardItemTwo,
}) {
  const thisId = item.id;

  const handleClick = () => {
    if (revealedCardsCount.current === 0) {
      const result = items.map((item) => {
        if (item.id === thisId) {
          cardItemOne.current = item;
          console.log(cardItemOne);
          return { ...item, revealed: true };
        }
        return item;
      });
      revealedCardsCount.current = 1;
      setItems(result);
    } else if (revealedCardsCount.current === 1) {
      if (cardItemTwo.current === undefined) {
        const result = items.map((item) => {
          if (item.id === thisId) {
            cardItemTwo.current = item;
            console.log(cardItemOne);
            return { ...item, revealed: true };
          }
          return item;
        });
        revealedCardsCount.current = 2;
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
}

export default GameItem;
