import React, { useState, useContext, useEffect } from "react";
import "./signin.styles.css";
import Navbar from "../navbar/navbar.component";
import axios from "axios";

import { useNavigate, Link } from "react-router-dom";
import { Context } from "../../Context";
export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    isLoggedIn,
    setIsLoggedIn,
    setUserData,
    userData,
    setSavedRecipes
  } = useContext(Context);

  const navigate = useNavigate();

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const onSubmitSignIn = e => {
    e.preventDefault();
    let login = {
      email: email,
      password: password
    };
    axios
      .post("http://localhost:4001/signin", login)
      .then(res => {
        if (res.data.id) {
          navigate(-1);
          setIsLoggedIn(true);
          setUserData(res.data);
        }
      })
      .catch(err => console.log(err));

    setEmail("");
    setPassword("");
  };

  return (
    <div class="sign-in">
      <Navbar />
      <form className="form" onSubmit={onSubmitSignIn}>
        <div class="title">Welcome</div>
        <div class="subtitle">Sign in </div>
        <div class="input-container ic2">
          <input
            id="email"
            class="input"
            type="email"
            placeholder=" "
            onChange={onEmailChange}
            value={email}
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
          <div class="cut"></div>
          <label for="lastname" class="placeholder">
            password
          </label>
        </div>
        <button type="text" class="submit">
          submit
        </button>

        <button type="text" class="submit">
          <Link to="/register">Create New Account</Link>
        </button>
      </form>
    </div>
  );
}
