import Info from "./Info";
import Input from "./Input";
import Noti from "./Noti";

const Form = (props) => {
  const value = props.value;
  const type = props.type;
  const list = props.list;
  let listItem = list.map((item, index) => (
    <Input
      key={item}
      className={item}
      id={item}
      type={type[index]}
      value={value[index]}
      placeholder={item}
      handleChange={props.onHandleChange}
      handleBlur={props.onHandleBlur}
      //     const type = ["text", "password", "password", "submit"];
      // const list = ["username", "password", "confirm", "submit"];
    >
      {props.state[item] == null ? (
        <></>
      ) : props.state[item] === false && index === 0 ? (
        <Noti>{props.state.notiUsername}</Noti>
      ) : props.state[item] === false && index === 1 ? (
        <Noti>{props.state.notiPassword}</Noti>
      ) : props.state[item] === false && index === 2 ? (
        <Noti>{props.state.notiConfirm}</Noti>
      ) : props.state[item] === true ?<Info icon='fas fa-check-circle' color='green'/>:<></>}
    </Input>
  ));

  return (
    <form onSubmit={props.handleSubmit} className="form">
      <h1 className="form__title">User Login</h1>
      {listItem}
    </form>
  );
};

export default Form;
