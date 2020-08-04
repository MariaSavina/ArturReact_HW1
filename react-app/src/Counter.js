import React from "react";
import Count from "./Count";
import Button from "./Button";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + this.props.step,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - this.props.step,
    });
  };
  render() {
    return (
      <div>
        <Count couCou={this.state.count} />
        <Button name={this.increment} callIt="+" />
        <Button name={this.decrement} callIt="-" />
      </div>
    );
  }
}

export default Counter;
