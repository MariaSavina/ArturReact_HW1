import React from "react";
import AgeDetector from "./AgeDetector";

const Greeting = (props) => {
  return (
    <p>
      {props.name}, {AgeDetector}
    </p>
  );
};

export default Greeting;
