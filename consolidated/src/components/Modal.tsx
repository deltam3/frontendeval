import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import Button from "./Button";

type PropTypes = {
  onClose: () => void;
  actionBar: any;
  children: any;
};

function Modal({ onClose, actionBar, children }: PropTypes) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className="fixed inset-0 bg-gray-300"></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div>
          <Button onClick={onClose}>Close Modal</Button>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-center flex-col">
            <div>{children}</div>
            <div className="flex justify-center">{actionBar}</div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
