import "./App.css";
import { useState } from "react";

import Modal from "./components/Modal";
import Button from "./components/Button";

function App() {
  const [difficulty, setDifficulty] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDifficultySelect = (number) => {
    setShowModal(false);
    setDifficulty(number);
  };

  const modal = (
    <Modal onClose={handleModalClose}>
      <section className="section-difficulties">
        <div class="difficulties">
          <div className="difficulty">
            <Button onClick={() => handleDifficultySelect(5)}>Select 5</Button>
          </div>

          <div className="difficulty">
            <Button onClick={() => handleDifficultySelect(6)}>Select 6</Button>
          </div>

          <div className="difficulty">
            <Button onClick={() => handleDifficultySelect(8)}>Select 8</Button>
          </div>
        </div>
      </section>
    </Modal>
  );

  const handleStartButton = () => {
    setShowModal(!showModal);
  };

  // const result = difficulty;
  return (
    <main className="main">
      <section className="section-game">
        <header>
          <h1>Memory Game</h1>
        </header>
        {showModal ? (
          modal
        ) : (
          <div className="game--before">
            <Button onClick={handleStartButton} primary>
              Start Game
            </Button>
          </div>
        )}
        {difficulty}
      </section>
    </main>
  );
}

export default App;
