import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button
      className="btn"
      type={props.type || "buttton"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
