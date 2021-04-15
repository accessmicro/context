import React, { useState } from "react";
import Modal from './Modal'
import './style.css'
const App_portals = (props) => {
  const [state, setstate] = useState(false);
  let onClick = ()=>{
      setstate(!state)
  }
  return (
    <>
      <h1>main page:</h1>
      <button onClick={onClick}>Open Modal</button>
      <Modal isModal={state}
      handleClick = {onClick}
      >
          modal ne!
      </Modal>
    </>
  );
};

export default App_portals;
