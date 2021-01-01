import React from "react";
import "./IconButton.css";
const IconButton = ({ Icon, title }) => {
  return (
    <div className="iconButton">
      <Icon className="iconButton__icon" />
      <span className="iconButton__title">
        <strong>{title}</strong>
      </span>
    </div>
  );
};

export default IconButton;
