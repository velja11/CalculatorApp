import React from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      className={props.style}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
      {props.title}
    </button>
  );
};

export default Button;
