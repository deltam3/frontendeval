import "./App.css";
import { useState, useEffect } from "react";

import Modal from "./components/Modal.jsx";
import "./components/Modal.css";
import Button from "./components/Button";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = (event) => {
    setShowModal(false);
  };

  const handleClickAction = () => {
    setShowModal(false);
    setShowResult(true);
  };

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>click the button below to accept our amazing offer</p>
    </Modal>
  );

  const actionBar = (
    <div>
      <Button onClick={handleClickAction} primary>
        Accept Offer
      </Button>
    </div>
  );

  useEffect(() => {
    function handleEscape(e) {
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
    <div>
      <div className="width-10 margin-auto">
        <Button onClick={handleClick} primary>
          Show Offer
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
}

export default App;
