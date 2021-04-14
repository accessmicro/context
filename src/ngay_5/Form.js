import Info from "./Info";
import Input from "./Input";

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
    >
      {props.state[item]==null?<Info icon="" color="" />:
        Object.keys(props.state)[index] === item && props.state[item]?(
        <Info icon="fas fa-check-circle" color="green" />
      ) : (
        <Info icon="fas fa-exclamation-triangle" color="orange" />
      )}
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
