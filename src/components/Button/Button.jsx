import React from "react";

export const Button = (props) => {
  return (
    <button className={props.className} onClick={() => props.click && props.click()}>
      {props.text}
    </button>
  );
};

export default Button;
