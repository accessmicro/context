import Form from "./Form";
import React, { useState } from "react";
import "./css/style.css";
const App_ngay_5 = () => {
  const type = ["text", "password", "password", "submit"];
  const list = ["username", "password", "confirm", "submit"];
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirm, setconfirm] = useState("");
  const [state, setstate] = useState({});
  
  let validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  // Cách kiểm tra mật khẩu từ 8 đến 16 ký tự trong đó có ít nhất một chữ số, một chữ hoa và một chữ thường
  let validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    return re.test(String(password));
  };
  let onHandleChange = (event) => {
    let id = event.target.id;
    let value = event.target.value;
    id === list[0]
      ? setusername(value)
      : id === list[1]
      ? setpassword(value)
      : setconfirm(value);

    console.table([username, password, confirm, "Submit"]);
  };
  let onHandleBlur = (event) => {
    const id = event.target.id;
    if (id === list[0]) {
      validateEmail(username)
        ? (state.username = true)
        : (state.username = false);
    }
    if (id === list[1]) {
      validatePassword(password)
        ? (state.password = true)
        : (state.password = false);
    }
    if (id === list[2]) {
      password === confirm && password.length > 3
        ? (state.confirm = true)
        : (state.confirm = false);
    }
    setstate({ ...state });
    console.log("state :>> ", state);
  };
  let handleSubmit = (event) => {
    console.log(`full>>`, username, password, confirm);
    state.username == true && state.password == true && state.confirm == true
      ? alert(`username: ${username}, password: ${password}`)
      : alert("hay hoan thien form!");
    event.preventDefault();
    setusername("");
    setpassword("");
    setconfirm("");
    setstate({});
  };
  return (
    <div className="model">
      <div className="model__left">
        <div className="model__img">
          <img
            src="https://cdn.dribbble.com/users/3844750/screenshots/10729124/media/2523facfa3e436b8331c316dcc4998f2.jpg"
            alt="img"
            title="Mật khẩu từ 8-16 kí tự: ít nhất 1 chữ Hoa, 1 chũ thường, 1 số"
          />
        </div>
      </div>
      <div className="model__right">
        <Form
          list={list}
          value={[username, password, confirm, "Login"]}
          type={type}
          onHandleChange={onHandleChange}
          onHandleBlur={onHandleBlur}
          handleSubmit={handleSubmit}
          state={state}
        ></Form>
      </div>
    </div>
  );
};

export default App_ngay_5;
