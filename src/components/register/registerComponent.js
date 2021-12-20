import React, { useState, useContext } from "react";

import "./register.styles.css";
import Navbar from "../navbar/navbar.component";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../../Context";

export default function RegisterPage() {
  const [name, SetName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn, setUserData } = useContext(Context);
  const navigate = useNavigate();
  const onNamelChange = e => {
    SetName(e.target.value);
  };

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    let register = {
      name: name,
      email: email,
      password: password
    };

    axios
      .post("http://localhost:4001/register", register)
      .then(res => {
        if (res.data.id) {
          navigate(-1);
          setIsLoggedIn(true);
          setUserData(res.data);
        }

        console.log(res);
      })
      .catch(err => console.log(err));

    setEmail("");
    SetName("");
    setPassword("");
  };
  return (
    <div className="register">
      <Navbar />
      <form className="form" onSubmit={onSubmit}>
        <div class="title">Welcome</div>
        <div class="subtitle">Let's create your account!</div>
        <div class="input-container ic1">
          <input
            id="firstname"
            class="input"
            type="text"
            placeholder=" "
            onChange={onNamelChange}
            value={name}
          />
          <div class="cut"></div>
          <label for="firstname" class="placeholder">
            name
          </label>
        </div>

        <div class="input-container ic2">
          <input
            id="email"
            class="input"
            type="email"
            placeholder=" "
            onChange={onEmailChange}
            value={email}
            required
          />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">
            Email
          </label>
        </div>

        <div class="input-container ic2">
          <input
            id="password"
            class="input"
            type="password"
            placeholder=" "
            onChange={onPasswordChange}
            value={password}
            required
          />
          <div class="cut cut-short"></div>
          <label for="password" class="placeholder">
            password
          </label>
        </div>
        <button type="text" class="submit">
          submit
        </button>
      </form>
    </div>
  );
}
