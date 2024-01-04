import { useState, useEffect } from "react";

import GameItem from "./GameItem";

import "./Game.css";

function Game({ difficulty }) {
  const totalNumberGameItems = difficulty * difficulty;
  const [gameItems, setGameItems] = useState([]);

  useEffect(() => {
    let result = [];
    let id = 1;
    for (let i = 1; i <= totalNumberGameItems; i++) {
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
      <h1>game</h1>
      {gameItems.map((gameItem) => {
        return <GameItem key={gameItem.id} item={gameItem}></GameItem>;
      })}
    </div>
  );
}

export default Game;
