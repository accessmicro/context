import React, {  useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ handleClick, isModal, children }) => {
  let modal = (
    <>
      <div className="screen" ></div>
      <div className="modal">
        <button onClick={handleClick}>Thoat ne</button>
        <div>{children}</div>
      </div>
    </>
  );
  if (!isModal) return null;
  return ReactDOM.createPortal(modal, document.getElementById("portals"));
};

export default Modal;
