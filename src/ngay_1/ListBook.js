import Book from "./Book";
import React from "react";
class ListBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: "2 dua tre ",
      author: { name: "Nguyen Vu Nghiem", gendar: "male" }
    };

    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
  }
  handleChangeFirstName(event) {
    this.props.onChangeFirstName(event.target.value)
    // this.setState(pre=>({
    //     ...pre.book,
    //     author:{...pre.author, firstName:event.target.value}

    // }));
}
handleChangeLastName(event) {
  this.props.onChangeLastName(event.target.value)
    // this.setState(pre=>({
    //     ...pre.book,
    //     author:{...pre.author, lastName:event.target.value}

    // }));
  }


  render() {
    return (
      <>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={this.props.author.firstName}
            onChange={this.handleChangeFirstName}
          />
        </label>
        <label>
          last Name:
          <input
            type="text"
            name="lastName"
            value={this.props.author.lastName}
            onChange={this.handleChangeLastName}
          />
        </label>
        <Book
          book={this.props.book}
          name={this.props.author.name}
          gendar={this.props.author.gendar}
          firstName={this.props.author.firstName}
          lastName={this.props.author.lastName}
        />
      </>
    );
  }
}

export default ListBook;
