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
}
