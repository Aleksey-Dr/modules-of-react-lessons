// import { useState, useEffect } from "react";

import useLocalStorage from '../../hooks/useLocalStorage';

const SignupForm = () => {
  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useLocalStorage("password", "");

  // const nandleEmailChange = event => {
  //     setEmail(event.target.value);
  // };

  // const nandlePasswordChange = event => {
  //     setPassword(event.target.value);
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  // useEffect(() => {
  //     window.localStorage.setItem('email', JSON.stringify(email));
  // }, [email]);

  // useEffect(() => {
  //     window.localStorage.setItem('password', JSON.stringify(password));
  // }, [password]);

  return (
    <form autoComplete="off">
      <label>
        <span>Mail</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>

      <br />

      <label>
        <span>Password</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
