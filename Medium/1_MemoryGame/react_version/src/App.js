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

  const modal = (
    <Modal onClose={handleModalClose}>
      <p>Click the button below</p>
    </Modal>
  );

  const handleStartButton = () => {
    setShowModal(!showModal);
  };

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
      </section>
    </main>
  );
}

export default App;
