import React from "react";
class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.counterId();
  }

  counterId = () => {
    this.countic = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  };
  restartCounter = () => {
    this.setState({
      count: 0,
    });
  };
  stopCount = () => {
    clearInterval(this.countic);
  };
  render() {
    return (
      <div>
        <div>{this.state.count + "s"}</div>
        <button onClick={this.counterId}>start</button>
        <button onClick={this.restartCounter}>restart</button>
        <button onClick={this.stopCount}>stop</button>
      </div>
    );
  }
}

export default StopWatch;
