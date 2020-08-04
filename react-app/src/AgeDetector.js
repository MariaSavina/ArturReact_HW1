import React from "react";

const AgeDetector = (props) => {
  //   if (props.age < 18) return "oups, you are too young";
  //   else if (props.age <= 21) return "welcome";
  //   else return "ok";
  return props.age < 18
    ? "oops, you are too young"
    : props.age <= 25
    ? "welcome"
    : props.age < 25
    ? "ok"
    : "you'r too old";
};

export default AgeDetector;
