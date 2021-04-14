const Input = (props) => {
  return (
    <label htmlFor={props.id} >
        <input
          className={props.className}
          id={props.id}
          type={props.type}
          value={props.value}
          placeholder={props.placeholder + "..."}
          onChange={(event) => props.handleChange(event)}
          onBlur={(event) => props.handleBlur(event)}
        />
        <span>{props.children}</span>
    </label>
  );
};

export default Input;
{/* <i class="fas fa-exclamation-triangle"></i> */}
{/* <i class="fas fa-check-circle"></i> */}