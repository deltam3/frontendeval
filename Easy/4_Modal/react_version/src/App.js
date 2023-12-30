import "./App.css";
import { useState } from "react";

import Modal from "./components/Modal.jsx";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgrroundColor: "red",
  padding: "10px",
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="main">
      <section class="section-button">
        <div
          style={BUTTON_WRAPPER_STYLES}
          onClick={() => console.log("clicked")}
        >
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Show Offer
          </Modal>
          <div style={OTHER_CONTENT_STYLES}>Other Content</div>
        </div>
      </section>
    </main>
  );
}

export default App;
