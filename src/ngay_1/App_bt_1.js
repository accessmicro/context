import Title from "./Title";
import React from "react";
import ListBook from "./ListBook";

// import { useState, useEffect } from "react";
// const App_bt_1 = () => {
//   let title = "Nguyen Vu Nghiem";
//   let randomColor = () => {
//     return "#" + Math.floor(Math.random() * 16777215).toString(16);
//   };
//   // let style = { color: `${randomColor()}` };
//   const [style, setstyle] = useState({ color: `${randomColor()}` });
//   useEffect(() => {
//     setInterval(() => {
//       this.setState({ style: { color: this.randomColor() } });
//     }, 1000);
//     return () => {};
//   }, []);
//   setInterval(() => {
//     setstyle((a) => a);
//   }, 1000);
//   return <Title name={title} style={style} />;
// };
class App_bt_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "nguyen vu nghiem",
      style: { color: this.randomColor() },
      book: "2 dua tre ",
      author: { name: "Nguyen Vu Nghiem", gendar: "male" },
    };
    this.randomColor = this.randomColor.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
  }
  randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  // setColor() {
  //   this.setState({ style: { color: this.randomColor() } });
  // }
  componentDidMount() {
    setInterval(() => {
      this.setState({ style: { color: this.randomColor() } });
    }, 1000);
    console.log("1");
  }
  ////////////////////////////////////////////////////////
  onChangeLastName(event) {
    this.setState((pre) => ({
      ...pre.title,
      ...pre.style,
      ...pre.book,
      author: { ...pre.author, lastName: event },
    }));
  }
  onChangeFirstName(event) {
    this.setState((pre) => ({
      ...pre.title,
      ...pre.style,
      ...pre.book,
      author: { ...pre.author, firstName: event},
    }));
  }
  ////////////////////////////////////////////////////////


  render() {
    return (
      <React.Fragment>
      <h1>Ngày 1</h1>
        <Title name={this.state.title} style={this.state.style} />
        <ListBook 
          book={this.state.book}
          name={this.state.author.name}
          gendar={this.state.author.gendar}
          firstName={this.state.author.firstName}
          lastName={this.state.author.lastName}
          author = {this.state.author}
          onChangeLastName = {this.onChangeLastName}
          onChangeFirstName = {this.onChangeFirstName}
        />
        <hr style= {{'border':'5px solid red'}}/>
      </React.Fragment>
    );
  }
}

export default App_bt_1;
