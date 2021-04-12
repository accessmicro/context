import App_Context from "./context/App_Context";
import "./App.css";
import React from "react";
import App_InputRange from "./input-range/App_InputRange";
function App() {
  return (
    <React.Fragment>
      <App_Context />
      <App_InputRange/>
    </React.Fragment>
  );
}

export default App;
