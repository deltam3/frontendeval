import { useState, useEffect, useRef } from "react";

import GameItem from "./GameItem";
import "./Game.css";

function Game({ difficulty }) {
  const totalNumberGameItems = difficulty * difficulty;
  const [gameItems, setGameItems] = useState([]);
  const numberRevealed = useRef(0);
  const cardItemOne = useRef();
  const cardItemTwo = useRef();

  let gameList;
  if (difficulty === 4) {
    gameList = "gamelist-easy";
  } else if (difficulty === 6) {
    gameList = "gamelist-medium";
  } else {
    gameList = "gamelist-hard";
  }

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

  return (
    <div>
      <div className={gameList}>
        {gameItems.map((gameItem) => {
          return (
            gameItem.paired && (
              <GameItem
                key={gameItem.id}
                item={gameItem}
                items={gameItems}
                setItems={setGameItems}
                numberRevealed={numberRevealed}
                cardItemOne={cardItemOne}
                cardItemTwo={cardItemTwo}
              ></GameItem>
            )
          );
        })}
      </div>
    </div>
  );
}

export default Game;
