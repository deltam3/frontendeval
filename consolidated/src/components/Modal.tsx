import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import Button from "./Button";

function Modal({ onClose, actionBar, children }: PropTypes) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div>React Portal</div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
