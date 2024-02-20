import React, { useState } from "react";
import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";
import Game from "./Game";

type Props = {};

const MemoryPage = (props: Props) => {
  const [difficulty, setDifficulty] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDifficultySelect = (number: any) => {
    setShowModal(false);
    setDifficulty(number);
  };

  const handleStartButton = () => {
    setShowModal(!showModal);
  };

  const modal = (
    <Modal onClose={handleModalClose}>
      <section>
        <div>
          <div>
            <Button onClick={() => handleDifficultySelect(4)}>Select 4</Button>
          </div>
          <div>
            <Button onClick={() => handleDifficultySelect(6)}>Select 6</Button>
          </div>
          <div>
            <Button onClick={() => handleDifficultySelect(8)}>Select 8</Button>
          </div>
        </div>
      </section>
    </Modal>
  );

  return (
    <section>
      <header>
        <h2 className="text-3xl text-center">Memory Game</h2>
      </header>
      {showModal ? (
        modal
      ) : (
        <div className="text-center my-8">
          <Button onClick={handleStartButton} primary>
            Start Game
          </Button>
        </div>
      )}
      {difficulty && <Game difficulty={difficulty}></Game>}
    </section>
  );
};

export default MemoryPage;
