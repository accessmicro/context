import Button from "./Button";
import { MyContext, randomColor } from "./data";

const Screen = (props) => {
  let style = { width: "300px", height: "300px" };
  let onSetBackground = (color, id) => {
    document.querySelector(`.${id}`).style.backgroundColor = color;
  };
  return (
    <MyContext.Consumer>
      {([color, screen]) => (
        <>
            <div style={{ ...style, backgroundColor: color }} className={screen}>
              {color}
            </div>
            <Button setBackground={()=>{
                let newColor = randomColor()
                document.querySelector("."+screen).style.backgroundColor = newColor;
                document.querySelector("."+screen).textContent = newColor
                document.querySelector("."+screen).style.backgroundColor = newColor
            }} />
        </>
      )}
    </MyContext.Consumer>
  );
};

export default Screen;
