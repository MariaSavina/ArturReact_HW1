import React from "react";
import Counter from "./Counter";

const Button = (props) => {
  return <button onClick={props.name}>{props.callIt}</button>;
  //   return props.name === "increment" ? (
  //     <button onClick={Counter.increment}>+</button>
  //   ) : (
  //     <button onClick={Counter.decrement}>-</button>
  //   );
};

export default Button;
