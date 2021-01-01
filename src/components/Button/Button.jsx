import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";
const Button = ({ type, title, route }) => {
  return (
    <Link className="btn-wrapper" to={route}>
      <button className={`${type}-btn btn`}>{title}</button>
    </Link>
  );
};

export default Button;
