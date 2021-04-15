import { MyContext, randomColor } from "./data";
import Screen from "./Screen";
import React, { useState } from "react";
import './css/style.css'
const App_tuan2_bai1 = () => {
  const [color, setcolor] = useState(randomColor);
  console.log(randomColor());
  return (
    <React.Fragment>
      <MyContext.Provider value={[color, "screen"]}>
        <Screen />
      </MyContext.Provider>
    </React.Fragment>
  );
};

export default App_tuan2_bai1;
