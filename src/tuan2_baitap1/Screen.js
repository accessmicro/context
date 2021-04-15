import Button from "./Button";
import React, { useState } from 'react';
import { MyContext, randomColor } from "./data";

const Screen = (props) => {
  let style = { width: "300px", height: "300px" };
  
  const [newColor, setnewColor] = useState(randomColor());
  return (
    <MyContext.Consumer>
      {([color, screen]) => (
        <>
            <div style={{ ...style, backgroundColor: color }} className={screen}>
              {color}
            </div>
            <Button setBackground={()=>{
                 setnewColor(randomColor())
                document.querySelector("."+screen).style.backgroundColor = newColor;
                document.querySelector("."+screen).textContent = newColor
                document.querySelector("."+screen).style.backgroundColor = newColor
                console.log('color:', newColor)
            }} />
        </>
      )}
    </MyContext.Consumer>
  );
};

export default Screen;
