import React, { useState } from "react";
import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";

type Props = {};

const MemoryPage = (props: Props) => {
  const [difficulty, setDifficulty] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDifficultySelect = (number) => {
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
    <div>
      <h2>MemoryPage</h2>
    </div>
  );
};

export default MemoryPage;
