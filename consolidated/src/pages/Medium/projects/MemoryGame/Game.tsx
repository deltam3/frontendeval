import React, { useState, useEffect, useRef } from "react";
import "./Game.css";
import GameItem from "./GameItem";

type Props = {
  difficulty: boolean | number;
};

export type GameItemType = {
  id: number;
  number: number;
  revealed: boolean;
  paired: boolean;
};

const Game = ({ difficulty }: Props) => {
  const totalNumberGameItems = difficulty * difficulty;
  const [gameItems, setGameItems] = useState([]);

  let revealedCardsCount = useRef(0);
  const cardItemOne = useRef(undefined);
  const cardItemTwo = useRef(undefined);

  let gameList;
  if (difficulty === 4) {
    gameList = "gamelist-easy";
  } else if (difficulty === 6) {
    gameList = "gamelist-medium";
  } else {
    gameList = "gamelist-hard";
  }

  useEffect(() => {
    console.log(`revealedCardsCount: ${revealedCardsCount.current}`);
    console.log(`cardItemOne: ${cardItemOne.current}`);
    console.log(`cardItemTwo: ${cardItemTwo.current}`);
  });

  // initial setup when the difficulty is set
  useEffect(() => {
    let result = [];
    let id = 1;
    for (let i = 1; i <= totalNumberGameItems / 2; i++) {
      result.push({ id: id, number: i, revealed: false, paired: false });
      id += 1;
      result.push({ id: id, number: i, revealed: false, paired: false });
      id += 1;
    }

    function shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    }

    setGameItems(shuffle(result));
  }, []);
  // runs whenever the component renders to check whether
  useEffect(() => {
    setTimeout(() => {
      if (
        cardItemOne.current?.number !== undefined &&
        cardItemTwo.current?.number !== undefined &&
        cardItemOne.current?.number === cardItemTwo.current.number
      ) {
        const result = gameItems.map((item) => {
          if (
            item?.id === cardItemOne.current?.id ||
            item?.id === cardItemTwo.current?.id
          ) {
            return { ...item, revealed: false, paired: true };
          }
          return item;
        });
        cardItemOne.current = undefined;
        cardItemTwo.current = undefined;
        revealedCardsCount.current = 0;
        setGameItems(result);
      }
      if (
        cardItemOne.current?.number !== undefined &&
        cardItemTwo.current?.number !== undefined &&
        cardItemOne.current?.number !== cardItemTwo.current?.number
      ) {
        const result = gameItems.map((item) => {
          if (
            item.id === cardItemOne.current?.id ||
            item.id === cardItemTwo.current?.id
          ) {
            return { ...item, revealed: false, paired: false };
          }
          return item;
        });
        cardItemOne.current = undefined;
        cardItemTwo.current = undefined;
        revealedCardsCount.current = 0;
        setGameItems(result);
      }
    }, 1000);
  });

  return (
    <div className="flex justify-center my-8">
      <div className={gameList}>
        {gameItems.map((gameItem) => {
          return (
            <GameItem
              key={gameItem.id}
              item={gameItem}
              items={gameItems}
              setItems={setGameItems}
              revealedCardsCount={revealedCardsCount}
              cardItemOne={cardItemOne}
              cardItemTwo={cardItemTwo}
            ></GameItem>
          );
        })}
      </div>
    </div>
  );
};

export default Game;
