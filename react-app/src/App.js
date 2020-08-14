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
import FackeLoading from "./FakeLoading";
import Notification from "./Notification";
import StopWatch from "./StopWatch";
import Resizer from "./Resizer";
import UserList from "./UserList";
import GithubUsers from "./GithubUsers";
import RandomAdvice from "./RandomAdvice";
import ParentRandom from "./PrentRandom";
import SearchingAdvice from "./SearchingAdvice";
// import Form from "./Form";

const users = [
  {
    name: "Alex",
    id: 1,
  },
  {
    name: "John",
    id: 2,
  },
  {
    name: "Bob",
    id: 3,
  },
];

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
        {/* <Accordion expanded={false}> */}
        {/* <div>Hidden text</div> */}
        {/* </Accordion> */}
        {/* <Avatar /> */}
        {/* <Greeting name="Petia" /> */}
        {/* <AgeDetector age={560} /> */}
        {/* <Counter step={3} initialCount={1000} /> */}
        {/* <h2>Facke Loading</h2> */}
        {/* <FackeLoading delay={3000} message="sucсsesы" /> */}
        {/* <h2>Notification</h2> */}
        {/* <Notification delay={3000}></Notification> */}
        {/* <h2>StopWatch</h2> */}
        {/* <StopWatch /> */}
        {/* <h2>Resizer</h2> */}
        {/* <Resizer ratio={0.15} /> */}
        {/* <Form /> */}
        <h2>UserList</h2>
        <UserList initialUsers={users} />
        <h2>RandomAdvice</h2>
        <ParentRandom />
        <h2>GithubUsers</h2>
        <GithubUsers />
        <h2>Searching advice</h2>
        <SearchingAdvice />
      </header>
    </div>
  );
}

export default App;
