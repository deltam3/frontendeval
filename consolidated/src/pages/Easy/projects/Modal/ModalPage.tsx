import React from "react";
import Modal from "../../../../components/Modal";
import { useState, useEffect } from "react";
import Button from "../../../../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleClickAction = () => {
    setShowModal(false);
    setShowResult(true);
  };

  const actionBar = (
    <Button onClick={handleClickAction} primary>
      Accept Offer
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <div className="flex justify-center align-middle flex-col">
        <div className="text-center">
          PRESS "ESC" on Your Keyboard to exit the Modal
        </div>
      </div>
    </Modal>
  );

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="my-6">
      <h2 className="text-3xl text-center">Modal Overlay</h2>
      <div className="flex justify-center width-10 margin-auto">
        <Button onClick={handleClick} primary>
          Show Modal
        </Button>
      </div>

      {showModal && modal}
      {showResult ? (
        <p>Offer Accepted</p>
      ) : (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat
            elit in est interdum fermentum. Cras vehicula a urna sit amet
            auctor. Mauris tempor magna a imperdiet posuere. Quisque quis
            malesuada felis, sit amet commodo mi. Vestibulum finibus suscipit
            porta. Donec a enim ac eros pellentesque efficitur. In ut ex enim.
            Cras lacinia quam id urna dapibus, a consequat mauris posuere. Etiam
            sed erat quis lacus condimentum viverra scelerisque sit amet elit.
            Mauris eget nunc sagittis, dapibus risus pharetra, placerat neque.
            Maecenas tristique risus lorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat
            elit in est interdum fermentum. Cras vehicula a urna sit amet
            auctor. Mauris tempor magna a imperdiet posuere. Quisque quis
            malesuada felis, sit amet commodo mi. Vestibulum finibus suscipit
            porta. Donec a enim ac eros pellentesque efficitur. In ut ex enim.
            Cras lacinia quam id urna dapibus, a consequat mauris posuere. Etiam
            sed erat quis lacus condimentum viverra scelerisque sit amet elit.
            Mauris eget nunc sagittis, dapibus risus pharetra, placerat neque.
            Maecenas tristique risus lorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat
            elit in est interdum fermentum. Cras vehicula a urna sit amet
            auctor. Mauris tempor magna a imperdiet posuere. Quisque quis
            malesuada felis, sit amet commodo mi. Vestibulum finibus suscipit
            porta. Donec a enim ac eros pellentesque efficitur. In ut ex enim.
            Cras lacinia quam id urna dapibus, a consequat mauris posuere. Etiam
            sed erat quis lacus condimentum viverra scelerisque sit amet elit.
            Mauris eget nunc sagittis, dapibus risus pharetra, placerat neque.
            Maecenas tristique risus lorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat
            elit in est interdum fermentum. Cras vehicula a urna sit amet
            auctor. Mauris tempor magna a imperdiet posuere. Quisque quis
            malesuada felis, sit amet commodo mi. Vestibulum finibus suscipit
            porta. Donec a enim ac eros pellentesque efficitur. In ut ex enim.
            Cras lacinia quam id urna dapibus, a consequat mauris posuere. Etiam
            sed erat quis lacus condimentum viverra scelerisque sit amet elit.
            Mauris eget nunc sagittis, dapibus risus pharetra, placerat neque.
            Maecenas tristique risus lorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat
            elit in est interdum fermentum. Cras vehicula a urna sit amet
            auctor. Mauris tempor magna a imperdiet posuere. Quisque quis
            malesuada felis, sit amet commodo mi. Vestibulum finibus suscipit
            porta. Donec a enim ac eros pellentesque efficitur. In ut ex enim.
            Cras lacinia quam id urna dapibus, a consequat mauris posuere. Etiam
            sed erat quis lacus condimentum viverra scelerisque sit amet elit.
            Mauris eget nunc sagittis, dapibus risus pharetra, placerat neque.
            Maecenas tristique risus lorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat
            elit in est interdum fermentum. Cras vehicula a urna sit amet
            auctor. Mauris tempor magna a imperdiet posuere. Quisque quis
            malesuada felis, sit amet commodo mi. Vestibulum finibus suscipit
            porta. Donec a enim ac eros pellentesque efficitur. In ut ex enim.
            Cras lacinia quam id urna dapibus, a consequat mauris posuere. Etiam
            sed erat quis lacus condimentum viverra scelerisque sit amet elit.
            Mauris eget nunc sagittis, dapibus risus pharetra, placerat neque.
            Maecenas tristique risus lorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat
            elit in est interdum fermentum. Cras vehicula a urna sit amet
            auctor. Mauris tempor magna a imperdiet posuere. Quisque quis
            malesuada felis, sit amet commodo mi. Vestibulum finibus suscipit
            porta. Donec a enim ac eros pellentesque efficitur. In ut ex enim.
            Cras lacinia quam id urna dapibus, a consequat mauris posuere. Etiam
            sed erat quis lacus condimentum viverra scelerisque sit amet elit.
            Mauris eget nunc sagittis, dapibus risus pharetra, placerat neque.
            Maecenas tristique risus lorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat
            elit in est interdum fermentum. Cras vehicula a urna sit amet
            auctor. Mauris tempor magna a imperdiet posuere. Quisque quis
            malesuada felis, sit amet commodo mi. Vestibulum finibus suscipit
            porta. Donec a enim ac eros pellentesque efficitur. In ut ex enim.
            Cras lacinia quam id urna dapibus, a consequat mauris posuere. Etiam
            sed erat quis lacus condimentum viverra scelerisque sit amet elit.
            Mauris eget nunc sagittis, dapibus risus pharetra, placerat neque.
            Maecenas tristique risus lorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat
            elit in est interdum fermentum. Cras vehicula a urna sit amet
            auctor. Mauris tempor magna a imperdiet posuere. Quisque quis
            malesuada felis, sit amet commodo mi. Vestibulum finibus suscipit
            porta. Donec a enim ac eros pellentesque efficitur. In ut ex enim.
            Cras lacinia quam id urna dapibus, a consequat mauris posuere. Etiam
            sed erat quis lacus condimentum viverra scelerisque sit amet elit.
            Mauris eget nunc sagittis, dapibus risus pharetra, placerat neque.
            Maecenas tristique risus lorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat
            elit in est interdum fermentum. Cras vehicula a urna sit amet
            auctor. Mauris tempor magna a imperdiet posuere. Quisque quis
            malesuada felis, sit amet commodo mi. Vestibulum finibus suscipit
            porta. Donec a enim ac eros pellentesque efficitur. In ut ex enim.
            Cras lacinia quam id urna dapibus, a consequat mauris posuere. Etiam
            sed erat quis lacus condimentum viverra scelerisque sit amet elit.
            Mauris eget nunc sagittis, dapibus risus pharetra, placerat neque.
            Maecenas tristique risus lorem.
          </p>
        </>
      )}
    </div>
  );
};

export default ModalPage;
