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
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
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
      // validateEmail(username)
      //   ? (state.username = true)
      //   : (state.username = false);
      if (validateEmail(username)) {
        state.username = true;
        state.notiUsername = '';
      } else if (username.length > 0) {
        state.username = false;
        state.notiUsername = "Chưa nhập đúng định dạng email...";
      } else {
        state.username = false;
        state.notiUsername = "Mời bạn nhập username...";
      }
    }
    if (id === list[1]) {
      // validatePassword(password)
      //   ? (state.password = true)
      //   : (state.password = false);
      if (validatePassword(password)) {
        state.password = true;
        state.notiPassword = '';
      } else if (password.length >= 8) {
        state.password = false;
        state.notiPassword =
          "Mật khẩu phải chứa ít nhất 1 sô, 1 chữ in HOA, 1 chữ thường...";
      } else if (password.length > 0) {
        state.password = false;
        state.notiPassword = "Mật khẩu dài ít nhất 8 kí tự(chứa ít nhất 1 sô, 1 chữ in HOA, 1 chữ thường).";
      } 
      else {
        state.password = false;
        state.notiPassword = "Mời bạn nhập password...";
      }
        if (state.password === true && password !== confirm && confirm.length!==0) {
        state.confirm = false;
        state.notiConfirm = "Mật khẩu không khớp...";
      } 
      if (state.password === true && password === confirm ) {
        state.confirm = true;
        state.notiConfirm = "";
      } 
    }
    if (id === list[2]) {
      // password === confirm && password.length > 8
      //   ? (state.confirm = true)
      //   : (state.confirm = false);
      if (password.length === 0) {
        state.notiConfirm = 'Hãy nhập password trước...'
        state.confirm = false;
      }
      else if (!state.password) {
        state.notiConfirm = 'Hãy nhập đúng password trước...'
        state.confirm = false;
      }
      else if(confirm.length===0){
        state.notiConfirm = 'Hãy nhập lại password...'
        state.confirm = false;

      }
      else if(confirm === password && state.password===true){
        state.notiConfirm = ''
        state.confirm = true;
        
      }
      else if(confirm !== password ){
        state.notiConfirm = 'Mật khẩu không khớp...'
        state.confirm = false;
        
      }
      else {
        
        state.confirm = false;
      }
    }
    setstate({ ...state });
    console.table( state);
    if(state.username === true && state.password === true && state.confirm === true){
      return true
    }
    else return false
  };
  let handleSubmit = (event) => {
    onHandleBlur(event)
      ? alert(`username: ${username}, password: ${password}`)
      : alert("Hãy hoàn thiện form!");
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
          <a href='https://www.chatwork.com/#!rid224360512' target='_blank'>
            <img
              src="https://cdn.dribbble.com/users/3844750/screenshots/10729124/media/2523facfa3e436b8331c316dcc4998f2.jpg"
              alt="img"
              title="Mật khẩu hơn 8 kí tự: ít nhất 1 chữ Hoa, 1 chũ thường, 1 số"
            />
          </a>
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
