import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./Input.js";
import Paragraph from "./Paragraph.js";
import Avatar from "./Avatar.js";
import Greeting from "./Greeting";
import AgeDetector from "./AgeDetector";
import Counter from "./Counter";
import Count from "./Count";
import Button from "./Button";
import Accordion from "./Accordion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p> */}
        {/* Edit <code>src/App.js</code> and save to reload. */}
        {/* </p> */}
        {/* <a */}
        {/* className="App-link" */}
        {/* href="https://reactjs.org" */}
        {/* target="_blank" */}
        {/* rel="noopener noreferrer" */}
        {/* > */}
        {/* Learn React */}
        {/* </a> */}
        {/* <Input /> */}
        {/* <Paragraph /> */}
        <Accordion />

        <Avatar />
        <Greeting name="Petia" />
        <AgeDetector age={560} />
        <Counter step={3} initialCount={1000} />
      </header>
    </div>
  );
}

export default App;
