import React, { useState, useEffect, useRef } from "react";
import "./Game.css";

type Props = {
  difficulty: boolean | number;
};

const Game = ({ difficulty }: Props) => {
  const totalNumberGameItems = difficulty * difficulty;
  const [gameItems, setGameItems] = useState([]);

  const revealedCardsCount = useRef(0);
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

  // return <div>Game</div>;
  return (
    <div>
      <div className={gameList}></div>
    </div>
  );
};

export default Game;
