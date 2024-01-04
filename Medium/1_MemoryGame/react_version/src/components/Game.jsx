import { useState, useEffect } from "react";

import GameItem from "./GameItem";
import "./Game.css";

function Game({ difficulty }) {
  const totalNumberGameItems = difficulty * difficulty;
  const [gameItems, setGameItems] = useState([]);

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
    for (let i = 1; i <= totalNumberGameItems; i += 2) {
      result.push({ id: id, number: i });
      id += 1;
      result.push({ id: id, number: i });
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
          return <GameItem key={gameItem.id} item={gameItem}></GameItem>;
        })}
      </div>
    </div>
  );
}

export default Game;
