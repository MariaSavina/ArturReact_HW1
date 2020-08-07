import React from "react";

class Resizer extends React.Component {
  state = {
    ratio: 0.15,
    width: 0,
    myWidth: 200,
  };
  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = (e) => {
    this.setState({
      width: e.target.innerWidth,
      myWidth: this.state.width * this.state.ratio,
    });
  };
  changeRatio = (e) => {
    this.setState({
      ratio: e.target.value,
    });
    console.log(e.target.value);
  };
  render() {
    return (
      <div>
        <input
          type="number"
          min={0.1}
          step={0.05}
          max={1}
          //   value={0.15}
          onChange={this.changeRatio}
        ></input>
        <br />
        <br />
        <div
          style={{
            height: "100px",
            width: this.state.myWidth,
            background: "#61dafb",
            fontSize: "15px",
          }}
        >
          Window width:{this.state.width}
          <br />
          My width:{this.state.myWidth}
          <br />
          My ratio:{this.state.ratio}
        </div>
        <br />
      </div>
    );
  }
}

export default Resizer;
