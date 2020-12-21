import React from "react";
import "./Button.css";
const Button = ({ type, title }) => {
  return <button className={`${type}-btn btn`}>{title}</button>;
};

export default Button;
