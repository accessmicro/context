import React from "react";
import { MyContext } from "./data";
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
//   set
  render() {
    let [color, id] = this.context;
    let props = this.props
    return (
        <button  onClick={this.props.setBackground} id={color}>
          Button
        </button>
    );
  }
}
Button.contextType = MyContext;
export default Button;
