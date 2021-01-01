import React from "react";
import Logo from "../Logo";
import Button from "../Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <Logo />
        <h1 class="login__title">Iniciar sesión en twitter</h1>
        <div className="login__form">
          <TextField
            id="email"
            className="login__input"
            label="Teléfono, correo o usuario"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="password"
            className="login__input"
            label="Contraseña"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </div>
        <Button type={"main"} title={"Iniciar Sesión"} route={"/home"} />
      </div>
    </div>
  );
};

export default Login;
